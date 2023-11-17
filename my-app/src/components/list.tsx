import { Accessor, For, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

export default function List (props: { count: number }) {
    const [numbers, setNumbers] = createStore([] as number[]);
    const handler = (index: Accessor<number>) => {
        console.log("Number refresh handeler");
        setNumbers(ns => ns.map((n, i) => i === index() ? Math.random() : n))
    };

    console.log("Numbers list re-render");

    createEffect(() => {
        console.log("Number effect");
        setNumbers(Array.from({ length: props.count }, _ => Math.random()));
    });

    return <For each={numbers}>
        {(number, index) => <div>
            { number } <button onClick={[handler, index]}>Refresh</button>
        </div>}
    </For>;
}