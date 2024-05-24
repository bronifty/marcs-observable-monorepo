import React from "react";
import ObservableFactory from "@bronifty/marcs-observable";

// declaring our observable state outside the component to maintain state across re-renders; this could also be done in a store and imported
const [
  childObservableGetter,
  childObservableSetter,
  childObservableSubscriber,
] = ObservableFactory.useState(0);
const [parentObservableGetter] = ObservableFactory.useState(
  () => childObservableGetter() * 2
);
let unsubscribe: any = undefined;

const App = () => {
  // subscribing react hook for ui update to observable value update inside a useEffect so it runs once on mount and doesn't get re-assigned every re-render
  const [input1, setInput1] = React.useState(childObservableGetter());
  React.useEffect(() => {
    unsubscribe = childObservableSubscriber((newVal) => {
      setInput1(newVal);
    });
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleInputChange = (e: any) => {
    // const newValue = e.target.value;
    // setInput1(newValue); // Update local React state
    childObservableSetter(e.target.value); // Update observable state
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

        <button onClick={unsubscribe}>unsubscribe from ui updates</button>
      </section>
    </>
  );
};

export default App;
