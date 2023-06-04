import { createSignal } from "solid-js";

export default function Solid() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="flex flex-row flex-wrap text-6xl gap-8 text-blue-500">
      <button onClick={() => setCount(count() - 1)}>-</button>
      <div>{count()}</div>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </div>
  );
}
