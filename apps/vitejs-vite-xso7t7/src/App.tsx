import { Suspense, useState } from "react";
import "./App.css";

function AsyncLikeComponent({
  count,
  promise,
}: {
  count: number;
  promise: (count: number) => Promise<JSX.Element>;
}) {
  return <Suspense fallback={<p>Pending...</p>}>{promise(count)}</Suspense>;
}

function App() {
  const [count, setCount] = useState(0);
  function generatePromise(count: number) {
    return (async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return <p>Hello! {count}</p>;
    })();
  }
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <AsyncLikeComponent count={count} promise={generatePromise} />
      </div>
    </>
  );
}

export default App;
