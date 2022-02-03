import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pages
import Home from "./pages/home";
import SignUp from './pages/signUp';
import Login from './pages/login';

// import components
import NavBar from './components/navBar';
import Footer from './components/footer';

// import chakra CSS framework components
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
