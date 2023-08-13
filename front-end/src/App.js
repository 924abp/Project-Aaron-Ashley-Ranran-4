<<<<<<< HEAD
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

=======
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

>>>>>>> 64b6d1d640e2dd8f8de8d73c9d83b2dea67bf62a
export default App;