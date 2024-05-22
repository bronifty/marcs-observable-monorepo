import { isBlank } from "common";
import { add, sub } from "ts-lib";

const App = () => {
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
    </>
  );
};

export default App;
