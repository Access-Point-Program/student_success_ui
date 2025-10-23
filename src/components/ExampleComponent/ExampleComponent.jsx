import { useState } from 'react';

export default function ExampleComponent({ name = 'World' }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}