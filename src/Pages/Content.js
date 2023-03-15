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


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const useStyles = makeStyles((theme) => ({
    typo: {
    
        margin: theme.spacing(1),
        fontSize: "3.25rem",
        fontWeight: 'bold',
        fontWeight: "800",
        letterSpacing: "-3px",
    
      
        // backgroundColor: theme.palette.secondary.main,
      },
 
    box: {
      margin: theme.spacing(4, 2),
    
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
   
    chip:{
      margin: theme.spacing(2.7, 0, 1), 
    },
 
  }));
 

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
   <Typography variant="h4" gutterBottom  
//    className={classes.typo}
sx={{  fontWeight: 'bold',  fontWeight: "800", letterSpacing: ".5px",}}

   >
        popular in  
       
       </Typography>
       <KeyboardArrowDownIcon  
       sx={{  color:"blue"}}
       />
       
      
        <Input 
        sx={{  fontSize: "30px",color:"blue",  fontWeight: '900',lineHeight:"40px" ,letterSpacing: ".5px"}}

        
         placeholder= { currLocation.city} 
        
        // inputProps={ariaLabel} 
        />
      

 
    </Box>
  
    
    </>

  );
}


export default Content ;