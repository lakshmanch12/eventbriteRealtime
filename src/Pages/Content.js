import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Stack,Typography,Box,Divider,Chip,Tab,Tabs} from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';
import {  Link } from "react-router-dom";
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const useStyles = makeStyles((theme) => ({
    box: {
      margin: theme.spacing(4, 2),
      display: 'flex',
      flexDirection: 'coloumn',
      alignItems: 'center',
    },
   
    chip:{
        color:"red",
      
    },
 
  }));
 
  const styles = {
    'input-label': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      color: 'red'
    },
  
    'input': {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue !important'
      }
    }
  };

function Content() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
//   const [value, setValue] = React.useState(null);
const [currLocation, setCurrLocation] = useState({});
const [currLocationJs, setCurrLocationJs] = useState({});
useEffect(() => {
  getLocation();
  getLocationJs();
}, []);

const getLocation = async () => {
  const location = await axios.get("https://ipapi.co/json");
  setCurrLocation(location.data);
  console.log(location.data,"location.data")
};

const getLocationJs = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { latitude, longitude } = position.coords;
    setCurrLocationJs({ latitude, longitude });
  });
};

  return (
    <>
    <Box   className={classes.box}>
      
   {/* <Typography variant="h4" gutterBottom  
sx={{  fontWeight: 'bold',  fontWeight: "800", letterSpacing: ".5px",}}>
        Popularin  
       </Typography>
       <KeyboardArrowDownIcon  
       sx={{  color:"#002dbd"}}
       /> */}
        

      
        {/* <Input  sx={{  fontSize: "30px",
        color:"#002dbd  ! important", opacity:"2", fontWeight: '900',lineHeight:"40px" ,letterSpacing: ".5px"}}
         placeholder= { currLocation.city}
    
        /> */}
  <Grid container spacing={{ xs: 1, md: 1}} columns={{ xs: 4, sm: 12, md: 17 }} sx={{marginTop:"100px"}}>
      
      <Grid item xs={12} sm={4} md={4} >
             
         <Link  to="/catgeory" style={{ textDecoration: 'none' }}>
         <Stack direction="row"textDecoration= 'none' spacing={0}>
         <Box sx={{
     width: 180,
     height: 70,
   
     textAlign: 'center',
  
     py: 2.2,
   }}
 >
    <Typography variant="h4" gutterBottom  
sx={{  fontWeight: 'bold',  fontWeight: "800", letterSpacing: ".5px",color:"black"}}>
        Popular in  
       </Typography>
      
     
     </Box>
     <Box
   sx={{
     width: 50,
     height: 70,
     py: 3.2,
     paddingLeft:'16px'
   }}
 >
    <KeyboardArrowDownIcon  
       sx={{  color:"#002dbd"}}
       />
     </Box>
   </Stack>
         </Link>
       
       </Grid>
       
       <Grid item xs={12} sm={4} md={4} >
       <Link  to="/catgeory" style={{ textDecoration: 'none' }}>
         <Stack direction="row" spacing={0}>
       

     <Box
   sx={{
     width: 210,
     height: 70,
     py: 1.2,
   paddingLeft:'-16px',
  
   
   }}
 >
     <Input  sx={{  fontSize: "30px",
        color:"#002dbd  ! important", opacity:"2", fontWeight: '900',lineHeight:"40px" ,letterSpacing: ".5px"}}
         placeholder= { currLocation.city}
    
        />
     </Box>
   </Stack>
         </Link>
       </Grid>
   </Grid>

    </Box>
  
    
    </>

  );
}


export default Content ;