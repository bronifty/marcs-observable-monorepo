#PNPM monorepo for marcs-observable

# Description

Monorepo for marcs-observable; under construction; should push to jsr.io upstream and then downstream to npm with the same namespace (@bronifty/marcs-observable)

The updated api from the default export is similar to React.useState which returns a getter, setter and subscriber tuple. We still need to hook into React lifecycle hooks to get a component tree branch update...

### Example Code

```tsx
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
```

### Setup

- web-app is to test the functionality of the package
- web-app has a dependency on marcs-observable package
- install everything from the root, then build marcs-observable, update everything from the root to push the changes to the web-app and finally run it and also test (q to quit because test watches)
- cleanup

```sh
pnpm i
pnpm build
pnpm update
pnpm dev
pnpm test
pnpm clean
```

### References

- https://jsr.io/@bronifty/marcs-observable
- https://www.npmjs.com/package/marcs-observable?activeTab=code

- https://dev.to/vinomanick/create-a-monorepo-using-pnpm-workspace-1ebn
- https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e
- https://jsr.io/@bronifty/marcs-observable/publish
- https://www.youtube.com/watch?v=MFCn4ce5dVc
