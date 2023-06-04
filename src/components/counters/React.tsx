import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row flex-wrap text-6xl gap-8 text-cyan-500">
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
