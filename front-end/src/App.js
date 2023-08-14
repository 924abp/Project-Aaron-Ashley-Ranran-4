import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Recipe from './components/Recipe';
import Login from './Login';
import Register from './Register';

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Recipe />}></Route>
            <Route path='/signin' element={<Login />}></Route>
            <Route path='/signup' element={<Register />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
