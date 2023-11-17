import { createMemo, mergeProps } from "solid-js";

// function Counter({ number }: { count: number }) {
function Counter(props: { count: number }) {
  console.log("Counter");
  // const value =  props.count || "None";
  // const value = createMemo(() => props.count || "None");
  // props = mergeProps({ count: "None" }, props);
  const value = () => props.count || "None";

  return (
    <>
      <h1 class="card">{ value() }</h1>
    </>
  )
}

export default Counter