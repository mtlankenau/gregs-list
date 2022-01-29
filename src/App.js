import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowseRouter } from 'react-router-dom';
import Home from "./pages/home";

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
