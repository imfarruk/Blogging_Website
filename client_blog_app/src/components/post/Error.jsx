import React from "react";
import {Box,Typography,Button} from '@mui/material';
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const useStyles=makeStyles({
container:{
  display:'flex',
  justifyContent: 'center',
}
});

const Error = () => {
  const classes=useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className="error_page_main">
          <img src="/images/404error.png" alt="errorpage" width='500'/>
          <div className="error_page_button">
         
            <Link to="/" className="btn btn-primary" style={{display:'flex', color:'inherit',textDecoration:'none'}}>
             <Button variant="contained" color="primary"> <ArrowBackIcon />Go Back</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
