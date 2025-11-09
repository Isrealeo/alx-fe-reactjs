// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter Application</h2>
      <p>Current Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ margin: '5px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
