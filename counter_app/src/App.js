import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="center">
      <h1 className="counter_text">{counter}</h1>
      <button className="btn" onClick={() => setCounter((e) => e + 1)}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
