import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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
  const [loggedIn, setLoggedIn] = useState(
    // initial value
    document.cookie.split(';').some((item) => item.trim().startsWith('loggedIn=')));
  
  return (
      <ChakraProvider>
    <ApolloProvider client={client}>
        <Router>
          <NavBar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/signup' component={Signup}/>
            </Switch>
          <Footer/>
        </Router>
    </ApolloProvider>
      </ChakraProvider>
  );
}

export default App;
