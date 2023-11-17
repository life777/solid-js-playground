import { createSignal } from 'solid-js'
import './App.css'
import Counter from './components/counter.tsx';
import List from './components/list.tsx';
import { Timer } from './components/timer.tsx';
import { Fetcher } from './components/fetcher.tsx';

function App() {
  const [count, setCount] = createSignal(0);

  console.log("Hello");

  return (
    <>
      <div class="card">
        <button onClick={() => setCount(count => count - 1)}>
          Decrease: count is {count()}
        </button>
        <button onClick={() => setCount(count => count + 1)}>
          Increase: count is {count()}
        </button>
        <Counter count={count()} />
        {/* <p><Timer count={count()} /></p>
        <p>
          <List count={count()}/>
        </p>
        <p>
          <Fetcher />
        </p> */}
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
