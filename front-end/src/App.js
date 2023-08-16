import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditRecipe from './pages/editRecipe/index';
import Login from './Login';
import Register from './Register';
import Home from './pages/home/index';
import Recipe from './pages/recipe/index';
import AddRecipe from './pages/addRecipe';
import YourRecipes from './pages/YourRecipes';
import AuthorRecipes from './pages/authorRecipes';
import AccountSettings from './pages/accountSettings';

function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signin' element={<Login />}></Route>
            <Route path='/signup' element={<Register />}></Route>
            <Route path='/recipe' element={<AddRecipe />}></Route>
            <Route path='/recipe/:id' element={<Recipe />}></Route>
            <Route path='/recipe/:id/edit' element={<EditRecipe />}></Route>
            <Route path='/author' element={<YourRecipes />}></Route>
            <Route path='/author/:id' element={<AuthorRecipes />}></Route>
            <Route path='/acount' element={<AccountSettings />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
