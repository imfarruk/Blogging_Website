import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, makeStyles } from "@material-ui/core";

import Toolbar from "@mui/material/Toolbar";
// import { useOktaAuth } from "@okta/okta-react";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  component: {
    background: "white",
    color: "black",
  },
  container: {
    justifyContent: "center",
    padding: "30px",
  },
});
const Navbar = () => {
  const classes = useStyles();
  const navigator = useNavigate();
  return (
    <>
      <AppBar className={classes.component}>
        <Toolbar className={classes.container}>
          <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            to="/About"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">About</Button>
          </NavLink>
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button color="inherit">Contact</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
