import React from "react";
import Observable from "marcs-observable";

// declaring our observable state outside the component to maintain state across re-renders; this could also be done in a store and imported
const [getter, setter, subscriber] = Observable.useState(0);
let count = 0;
const unsub = subscriber(() => count++);

const App = () => {
  // using a controlled input via React.useState in order to hook into the component lifecycle and get a view update when the input value changes
  const [input1, setInput1] = React.useState(0);
  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    setInput1(newValue); // Update local React state
    setter(newValue); // Update observable state
  };

  return (
    <>
      <section>
        <h2>numeric input</h2>
        <input type="number" value={input1} onChange={handleInputChange} />
        <p>observable value (getter()): {getter()}</p>
        <p>observed value (count): {count}</p>
        <button onClick={() => unsub()}>unsubscribe</button>
      </section>
    </>
  );
};

export default App;
