import React from 'react'
import ToDo from './Pages/ToDo.js';
import Error from './Pages/Error.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App (){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<ToDo/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}