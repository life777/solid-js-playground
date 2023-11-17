import { createEffect, createSignal, onCleanup } from "solid-js";

export const Timer = (prop: { count: number }) => {
    const [seconds, setSeconds] = createSignal(0);
    const timer = setInterval(() => setSeconds(seconds() + 1), 1000);

    createEffect(() => {
        prop.count;
        setSeconds(0);
    });

    onCleanup(() => clearInterval(timer));
  
    return <div>{seconds()}: Seconds past since last click</div>;
};