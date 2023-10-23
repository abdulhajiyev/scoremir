/* import io from 'socket.io-client'
const socket = io('http://localhost:3001')

export default function Mes() {

  const sendMsg = () => {
    socket.emit('message', 'Hello there from client')
  }

  return (
    <>
      <input type="text" />
      <button onClick={sendMsg}>Send msg</button>
    </>
  )
}
 */

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Counter from './Counter';

const socket = io('http://localhost:3001');

function Mes() {
  const [count, setCount] = useState(0);

  useEffect(() => {

    socket.on('updateCount', (newCount) => {
      setCount(newCount);
      localStorage.setItem('count', newCount);
    });


    return () => {
      socket.off('updateCount');
    };
  }, []);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    socket.emit('updateCount', newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);

    socket.emit('updateCount', newCount);
  };

  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} />
    </>
  );
}

export default Mes;
