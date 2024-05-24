import { useState } from "react";

export default function RemoteCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>RemoteCounter: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
