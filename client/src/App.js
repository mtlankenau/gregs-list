import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import pages
import Home from "./pages/home";
import Signup from './pages/signUp';
import Login from './pages/login';
import CreateJob from './pages/create-job';
import SingleJob from './pages/single-job';
import jobCat from './pages/jobCat';
import Profile from './pages/profile';
// import components
import NavBar from './components/navBar';
import Footer from './components/footer';

// import chakra CSS framework components
import { ChakraProvider, Container } from '@chakra-ui/react';


function App() {
  // const [loggedIn, setLoggedIn] = useState(
  //   // initial value
  //   document.cookie.split(';').some((item) => item.trim().startsWith('loggedIn='));
  // )
  return (
    <ChakraProvider classname="App" minH='100%'>
      <Router>
        <Container minW='100%' >
          <NavBar/>
            <Switch>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/CreateJob' component={CreateJob}/>
            </Switch>
              <Route exact path='/profile' component={Profile}/>

          <Footer />
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
