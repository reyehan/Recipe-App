import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import Home from './Home';
import Searched from './Searched';
import Recipes from './Recipes';

function Pages() {
   return (
      <Routes>
         <Route path='/' element={ <Home />} />
         <Route path='/cuisine/:type' element={ <Cuisine />} />
         <Route path='/searched/:search' element={ <Searched />} />
         <Route path='/recipe/:name' element={ <Recipes />} />
      </Routes>
   )
}

export default Pages;
