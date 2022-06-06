import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    background: `url(${"/images/blog.jpg"}) center/55% repeat-x #0000`,
    height: "50vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    "& :first-child": {
      fontSize: 70,
      color: "white",
      background: "brown",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 30,
      background: "#ffffff",
      color: "brown",
      fontWeight: "bold",
      padding: "0 10px 0 10px",
    },
  },
});
const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.image}>
        <Typography>BLOG</Typography>
        <Typography>Blogging is good for your career</Typography>
      </Box>
    </>
  );
};

export default Banner;
