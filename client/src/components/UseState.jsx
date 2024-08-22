import { useState } from "react"

export default function UseState() {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>UseState</h1>

      <p>Count1: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>


      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment - 2</button>
      <br />
      <button onClick={() => setCount2(count2 - 1)}>Decrement - 2</button>
    </div>
  )
}
