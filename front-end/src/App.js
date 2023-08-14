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

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 78ae43677421fa336ba3ca2229290b58f0304f5c
