import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function GetTestValue(key: string) {
  const errMsg = `Unable to get environment value for key [${key}]`;
  if (window == undefined) {
    return errMsg;
  }

  if ((window as any)["_env_"] == undefined) {
    return errMsg;
  }

  if ((window as any)["_env_"][key] == undefined) {
    return errMsg;
  }

  return (window as any)["_env_"][key];
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>TEST_SETTING: {GetTestValue("TEST_SETTING")}</p>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
