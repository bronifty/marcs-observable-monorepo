# marcs-observable

- [@bronifty/marcs-observable](https://www.npmjs.com/package/@bronifty/marcs-observable)
  bronifty@gmail.com

### Description

This package is a typescript replica of [@1marc's](https://x.com/1Marc) observablish-values package used on the frontend masters website for the media player.

### Usage

**Install Package**

```sh
pnpm add @bronifty/marcs-observable
```

**Code Example**

```tsx
import React from "react";
import MarcsObservable from "@bronifty/marcs-observable";

// declaring our observable state outside the component to maintain state across re-renders; this could also be done in a store and imported
const [
  childObservableGetter,
  childObservableSetter,
  childObservableSubscriber,
] = MarcsObservable.useState(0);
const [parentObservableGetter] = MarcsObservable.useState(
  () => childObservableGetter() * 2
);
let unsubscribe = () => {};

const App = () => {
  // subscribing react hook for ui update to observable value update inside a useEffect so it runs once on mount and doesn't get re-assigned every re-render
  const [input1, setInput1] = React.useState(childObservableGetter());
  React.useEffect(() => {
    unsubscribe = childObservableSubscriber((newVal: any) => {
      setInput1(newVal);
    });
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleInputChange = (e: any) => {
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
```
