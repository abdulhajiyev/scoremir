import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mes from './Mes';
import ValueDisplay from './ValueDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Mes/>} />
        <Route path="/value" element={<ValueDisplay/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
