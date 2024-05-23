import React from "react";
import ObservableFactory from "@bronifty/marcs-observable";

// declaring our observable state outside the component to maintain state across re-renders; this could also be done in a store and imported
const [
  childObservableGetter,
  childObservableSetter,
  childObservableSubscriber,
] = ObservableFactory.useState(5);
const func = () => childObservableGetter() * 2;
const [parentObservableGetter] = ObservableFactory.useState(func);
// expect(parentObservableGetter()).toBe(10);
childObservableSetter(10);
// expect(parentObservableGetter()).toBe(20);
let count = 0;
const unsub = childObservableSubscriber(() => count++);

const App = () => {
  // using a controlled input via React.useState in order to hook into the component lifecycle and get a view update when the input value changes
  const [input1, setInput1] = React.useState(0);
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInput1(newValue); // Update local React state
    childObservableSetter(newValue); // Update observable state
  };

  return (
    <>
      <section>
        <h2>numeric input</h2>
        <input type="number" value={input1} onChange={handleInputChange} />
        <p>
          childObservableGetter value (childObservableGetter()):{" "}
          {childObservableGetter()}
        </p>
        <p>
          parentObservableGetter value (parentObservableGetter()):{" "}
          {parentObservableGetter()}
        </p>
        <p>observed value (count): {count}</p>
        <button onClick={() => unsub()}>unsubscribe</button>
      </section>
    </>
  );
};

export default App;
