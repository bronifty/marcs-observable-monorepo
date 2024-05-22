import React from "react";
import { isBlank } from "common";
import { add, sub } from "ts-lib";

const App = () => {
  const [input1, setInput1] = React.useState(4);
  const [input2, setInput2] = React.useState(3);
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
    </>
  );
};

export default App;
