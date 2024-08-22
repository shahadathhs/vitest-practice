import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));
  const reset = () => setCount(0);

  return { count, increment, decrement, reset };
}
