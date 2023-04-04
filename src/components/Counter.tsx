import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="flex flex-col items-center justify-evenly p-5 w-50 bg-base-200 rounded-xl gap-5">
      <span class="countdown">
        <span style={"--value:" + count()} class="text-lg font-bold">
          {count()}
        </span>
      </span>
      <div class="flex flex-center gap-5">
        <button class="btn" onClick={() => setCount(count() + 1)}>
          +
        </button>
        <button class="btn" onClick={() => setCount(count() - 1)}>
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
