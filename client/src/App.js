import React from 'react';
import Home from "./pages/home";

import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Link, 
  BrowseRouter 
} from 'react-router-dom';


function App() {
  return (
    // <BrowseRouter>
    //   <Header />
    //   <Routes>
    //     <Route
    //       exact path="/"
    //       element={<Home />}
    //     />

    //   </Routes>

    //   <Footer />
    // </BrowseRouter>

    <Home />
  );
}

export default App;
