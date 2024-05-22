import React from "react";
import { isBlank } from "common";
import { add, sub } from "ts-lib";
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
        <h1>test 1 - common lib</h1>
        <p>undefined isBlank - {isBlank(undefined) ? "true" : "false"}</p>
        <p>false isBlank - {isBlank(false) ? "true" : "false"}</p>
        <p>true isBlank - {isBlank(true) ? "true" : "false"}</p>
        <p>Empty object isBlank - {isBlank({}) ? "true" : "false"}</p>
      </section>
      <section>
        <h1>test 2 - ts-lib</h1>
        <p>add(1,2) - {add(1, 2)}</p>
        <p>sub(1,2) - {sub(1, 2)}</p>
      </section>
      <section>
        <input
          id="input1"
          type="number"
          value={input1}
          onChange={(e) => setInput1(parseInt(e.target.value))}
        />
        <input
          id="input2"
          type="number"
          value={input2}
          onChange={(e) => setInput2(parseInt(e.target.value))}
        />

        <p>add {add(input1, input2)}</p>
        <p>sub {sub(input1, input2)}</p>
      </section>
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
