import { Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Works also with SSR as expected
const Card1 = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => import("./Card1")
  )
);

const Card2 = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 5000)).then(
    () => import("./Card2")
  )
);

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Card1 />
      </Suspense>
      <Suspense fallback={<p>Loading card component...</p>}>
        <Card2 />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
