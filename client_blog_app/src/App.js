import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import AppWithRouterAccess from "./AppWithRouterAccess.js";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import DetailView from "./components/post/DetailView.jsx";
import CreateView from "./components/post/CreateView.jsx";
import UpdateView from "./components/post/UpdateView.jsx";
import Error from "./components/post/Error.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/contact.jsx";
import { Box } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Box style={{ marginTop: 125 }}>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<DetailView />} />
          <Route exact path="/create" element={<CreateView />} />
          <Route exact path="/update/:id" element={<UpdateView />} />
          <Route exact path="*" element={<Error />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
