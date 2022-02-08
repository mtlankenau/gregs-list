import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import pages
import Home from "./pages/home";
import Signup from './pages/signUp';
import Login from './pages/login';
import CreateJob from './pages/create-job';
import SingleJob from './pages/single-job';
import JobCat from './pages/jobCat';
import Profile from './pages/profile';
// import components
import NavBar from './components/navBar';
import Footer from './components/footer';

// import chakra CSS framework components
import { ChakraProvider, Container } from '@chakra-ui/react';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const [loggedIn, setLoggedIn] = useState(
  //   // initial value
  //   document.cookie.split(';').some((item) => item.trim().startsWith('loggedIn='));
  // )
  return (
    <ChakraProvider classname="App" minH='100%'>
      <ApolloProvider client={client}>
      <Router>
        <Container minW='100%' >
          <NavBar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signUp' component={Signup}/>
              <Route exact path='/CreateJob' component={CreateJob}/>
              <Route exact path='/profile/:username' component={Profile}/>
              <Route exact path='/jobCat/:category' component={JobCat}/>
              <Route exact path='/single-job/:username/:postId' component={SingleJob}/>
            </Switch>
              

          <Footer />
        </Container>
      </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
