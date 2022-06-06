import React from "react";
import { Grid } from "@material-ui/core";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container style={{ display: "flex", justifyContent: "center" }}>
        <Grid item lg={2} md={2} xs={10} sm={4}>
          <Categories />
        </Grid>
        <Grid container item lg={10} md={10} xs={10} sm={8}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
