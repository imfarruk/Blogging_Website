import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@material-ui/core";

//components
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";
import Error from "./components/post/Error";
import About from "./components/about/About";
import Contact from "./components/contact/contact";

const AppWithRouterAccess = () => {
  return (
    <>
      {/* <Route path="/" component={Navbar} /> */}
      <Navbar />
      {/* <Box style={{ marginTop: 64 }}> */}
      <Routes>
        <Route exact path="/" component={Home} />

        <Route exact path="/details/:id" component={DetailView} />
        <Route exact path="/create/:category?" component={CreateView} />
        <Route exact path="/update/:id" component={UpdateView} />

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={Error} />
      </Routes>
      {/* </Box> */}
    </>
  );
};

export default AppWithRouterAccess;
