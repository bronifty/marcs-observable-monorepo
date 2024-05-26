#PNPM monorepo for marcs-observable with Nx

- [@bronifty/marcs-observable](https://www.npmjs.com/package/@bronifty/marcs-observable)

### Description

This package is a typescript replica of [@1marc's](https://x.com/1Marc) observablish-values package used on the frontend masters website for the media player.

Monorepo for marcs-observable. Enhanced with nx.

The updated api from the default export is similar to React.useState which returns a getter, setter and subscriber tuple. We still need to hook into React lifecycle hooks to get a component tree branch update...

### Example Code

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

### Quick intro to Nx

- whereas with pnpm you filter the command for the project, with nx you run the command and specify the project

```sh
 npx nx <target> <project>
```

target is the NPM script in this specific case you want to execute.

### Sample Nx Commands

- dev is the package.json script in the web project

```sh
npx nx dev web
npx nx test @bronifty/marcs-observable
```

- run commands in parallel

```sh
npx nx run-many --target=build --all
npx nx run-many --target=build --projects=@bronifty/marcs-observable,web
```

> Note I’m prefixing the commands with npx which runs the Nx executable in the node_modules folder. In this way I don't have to install nx globally. If you prefer doing that, feel free to do so.

### References

- https://www.npmjs.com/package/@bronifty/marcs-observable
- https://jsr.io/@bronifty/marcs-observable
- https://dev.to/vinomanick/create-a-monorepo-using-pnpm-workspace-1ebn
- https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e
- https://www.youtube.com/watch?v=MFCn4ce5dVc
