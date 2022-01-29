import React from 'react';
import Home from "./pages/home";
import SignUp from './pages/signUp';
import NavBar from './components/navBar';

import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Link, 
  BrowseRouter 
} from 'react-router-dom';


function App() {
  return (
    
    <NavBar />,    
    <SignUp />
    
    
  );
}

export default App;
