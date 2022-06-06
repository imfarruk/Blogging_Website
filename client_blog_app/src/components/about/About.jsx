import React from "react";

import { styled,Typography,Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // width: "90%",
  marginTop:50,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ImageItem = styled('img')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // width: "90%",
  marginTop:60,
  padding: theme.spacing(.1),
  textAlign: 'center',
  border: '1px solid black',
  borderRadius:'50%',
  color: theme.palette.text.secondary,
}));


const About = () => {
  return (
    <>
     <Box sx={{ }}>
     <Grid container spacing={2} sx={{marginTop:'30px',display:'flex',justifyContent:'center'}}>
  <Grid item xs={6}>
    <Item>
      <Typography sx={{fontSize:'18px',fontWeight:600, transform: "scaleY(1.5)",}}>About Us</Typography>
      <hr/>
      <Typography sx={{marginTop:5,lineHeight:2}}>This Blogging website is design to blog.<br/>
      You can create ,update,delete the post and also comment on a particular post.<br/>
      You can also give feedback about this website if you find any mistaske or wants to give some idea for this page.</Typography>
     <Link to='/contact' style={{textDecoration:'none'}}>
     <Button > <SendIcon sx={{marginRight:1.5}}/>Send Msg</Button>
     </Link>
    </Item>
  </Grid>
  <Grid item xs={3  } sx={{display:'flex',justifyContent: 'center'}}>
    <ImageItem src="/images/blog.png" alt="aboutImg" width='250' />
  </Grid>
  
  
</Grid>
</Box>
    </>
  );
};

export default About;
