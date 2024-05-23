import React from "react";
// pnpm add marcs-observable
import marcsObservable, { ObservableFactory } from "marcs-observable";
// import marcsObservable from "@bronifty/marcs-observable";

// creating observables outside of the component in order to preserve state when component re-renders
// this could also be done in a store and inported
const child = marcsObservable(() => 1);
const parent = marcsObservable(() => child.value + 1);
const [getChildState, setChildState] = ObservableFactory.useState(0);
const [getParentState, setParentState] = ObservableFactory.useState(0);

const App = () => {
  const [_, setChildValue] = React.useState(child.value);

  // useEffect to trigger a re-render when the child observable changes
  React.useEffect(() => {
    const childSubscription = child.subscribe((value) => setChildValue(value));
    return () => {
      childSubscription();
    };
  }, []);

  return (
    <>
      <section>
        <h1>test 3 - marcs-observable</h1>
        <p>child.value - {child.value}</p>
        <p>parent.value - {parent.value}</p>
        <button onClick={() => (child.value += 1)}>child.value += 1</button>
      </section>
    </>
  );
};

export default App;
