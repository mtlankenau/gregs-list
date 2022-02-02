import React from 'react';
import Home from "./pages/home";
import SignUp from './pages/signUp';
import NavBar from './components/navBar';
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

import { 
  BrowserRouter as Router, 
  Route, 
  BrowserRouter
} from 'react-router-dom';


function App() {
  return (
    <ChakraProvider>
      <Button colorScheme='blue'>Button</Button>
      {/* <Router>
        <Route>
      {/* //  <div>
      //    <NavBar />
      //      <div>
      //        <Home />
      //      </div>
      //  </div> */}
        {/* </Route> */}
      {/* </Router> */}
    </ChakraProvider>
  );
}

export default App;
