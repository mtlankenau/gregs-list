import React from 'react';
import Home from "./pages/home";
import SignUp from './pages/signUp';
import NavBar from "./components/navBar";

import { 
  BrowserRouter as Router, 
  Route, 
  BrowserRouter
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <div>
            <Home />
          </div>
      </div>
    </Router>
  );
}

export default App;
