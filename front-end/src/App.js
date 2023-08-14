import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MealFinder from './components/MealFinder'
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<MealFinder />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Register />}></Route>
          </Routes>
      </BrowserRouter>
  );
}
export default App;