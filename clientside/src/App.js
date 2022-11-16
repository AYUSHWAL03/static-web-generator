import React from "react";
// import Header from "./header";
import HomePage from "./homepage";
import {BrowserRouter} from 'react-router-dom';
const App =() =>{
  return(<div>
    <BrowserRouter>
    
    <HomePage />
    </BrowserRouter>
    
  </div>)
} 

export default App;