import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function ValueDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Listen for updates from the server and set the count
    socket.on('updateCount', (newCount) => {
      setCount(newCount);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('updateCount');
    };
  }, []);

  return (
    <div>
      <h1>Count Value: {count}</h1>
    </div>
  );
}

export default ValueDisplay;
