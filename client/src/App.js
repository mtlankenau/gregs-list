import React from 'react';
import Home from "./pages/home";
import SignUp from './pages/signUp';
import NavBar from './components/navBar';
import {ApolloProvider} from '@apollo/client'

import { 
  BrowserRouter as Router, 
  Route, 
  BrowserRouter
} from 'react-router-dom';


function App() {
  return (
    <ApolloProvider>
      <Router>
        <Route>
          <div>
            <NavBar />
            <div>
              <Home />
            </div>
          </div>
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
