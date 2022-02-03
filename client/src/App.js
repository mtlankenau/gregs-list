import React from 'react';
import Home from "./pages/home";
import SignUp from './pages/signUp';
import NavBar from './components/navBar';
import { ChakraProvider } from '@chakra-ui/react';
import { Container} from '@chakra-ui/react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import LogIn from "./components/logIn";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>

      <Switch>
        <Router path='/logIn'>
          <LogIn />
        </Router>
      </Switch>

      <Switch>
        <Router path='/signUp'>
          <SignUp />
        </Router>
      </Switch>

      {/* <Switch>
        <Router path='/logIn'>
          <LogIn />
        </Router>
      </Switch> */}

    
    </BrowserRouter>
  );
}

export default App;
