import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div class="flex flex-row flex-wrap text-6xl gap-8 text-purple-500">
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
