import React from "react";

import createPersistedState from "@plq/use-persisted-state";

const [usePersistedState, clear] = createPersistedState(
  "simple_example",
  window.sessionStorage
);

function App() {
  const [count, setCount] = usePersistedState("count", 0);

  return (
    <div>
      {count}{" "}
      <button
        onClick={() => {
          setCount(prevCount => prevCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
