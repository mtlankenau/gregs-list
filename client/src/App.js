import React from 'react';
import Home from "./pages/home";
import SignUp from './pages/signUp';

import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Route 
          path="/"
          element={<Home />}
        />
        {/* <Route
          path="/about"
          element={<AboutMe/>}
        />
        <Route
          path="/portfolio"
          element={<Portfolio/>}
        />
        <Route
          path="/contact"
          element={<Contact/>}
        />
        <Route
          path="/resume"
          element={<Resume/>}
        /> */}

    </Router>
  );
}

export default App;
