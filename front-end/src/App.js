import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/signup' element={<Register />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;