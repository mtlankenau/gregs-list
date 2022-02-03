import React from 'react';
import Home from "./pages/home";
import SignUp from './pages/signUp';
import NavBar from './components/navBar';
import { ChakraProvider } from '@chakra-ui/react';
// import { Container} from '@chakra-ui/react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/logIn";


function App() {
  return (
    <ChakraProvider>
    <Router>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>

      {/* <Switch>
        <Router path='/logIn'>
          <LogIn />
        </Router>
      </Switch> */}

    </Router>
    </ChakraProvider>
  );
}

export default App;
