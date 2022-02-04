import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pages
import Home from "./pages/home";
import Signup from './pages/signUp';
import Login from './pages/login';
import createJob from './pages/create-job';

// import components
import NavBar from './components/navBar';
import Footer from './components/footer';

// import chakra CSS framework components
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [loggedIn, setLoggedIn] = useState(
    // initial value
    document.cookie.split(';').some((item) => item.trim().startsWith('loggedIn='));
  )
  return (
    <ChakraProvider classname="App">
      <Router>
        <NavBar {...{loggedIn}}/>
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' render={(routeProps) => <LogIn {...{setLoggedIn, ...routeProps}}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/createJob' component={createJob}/>
          </Switch>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
