import React from "react";
import { Observable, ObservableFactory } from "marcs-observable";

// creating observables outside of the component in order to preserve state when component re-renders
// this could also be done in a store and inported
const child = ObservableFactory.create(() => 1);
const parent = new Observable(() => child.value + 1);

const App = () => {
  const [input1, setInput1] = React.useState(1);
  const [input2, setInput2] = React.useState(2);
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
