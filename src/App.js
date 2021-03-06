import React from "react";
//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Home from "./components/Home";

//Styles
import { GlobalStyle } from "./GlobalStyle";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
