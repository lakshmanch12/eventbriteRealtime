import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import View from "./View";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import MissedVideoCallOutlinedIcon from '@mui/icons-material/MissedVideoCallOutlined';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import Image from './Image';
import FaceIcon from '@mui/icons-material/Face';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';



import Grid from '@mui/material/Grid';
import {  Link } from "react-router-dom";
// import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import API from "../API/API";
const api = new API();
const top100Films = [

   
  
  { label: ' Mumbai' },
  { label: '	Delhi' },
  { label: 'Bangalore ' },
  { label: 'Hyderabad '},
  { label: '	Ahmedabad ' },
  { label: 'Chennai' },
  { label: ' Kolkata' },
  { label: 'Surat' },
  { label: 'Visakhapatnam', },
  { label: 'Kanpur'},
];
const Hero = () => {
  
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#F7F154",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    margin: theme.spacing(2, 0, -10, 0),
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      <Item><Link  to="/"variant="=body2" >Home</Link>  /  <Link  to="/Register" variant="h6">visakhapatnam </Link>   / Music</Item>
       
      </Stack>
    </Box>
    <Box sx={{ backgroundColor: "blue", minHeight: "30vh" }}>
      <Container>
   
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Title variant="h1">
            Music events
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#8FF2F7", my: 4 }}
            >
            in Visakhapatnam, India
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#8FF2F7",
                fontWeight: "500",
                mt:1,
              }}
            >
           Discover the best Music events in your area and online
            </Typography>
          
          </Box>

          <Box sx={{ flex: "0.5" }}>
            <img
              src="https://cdn.evbstatic.com/s3-build/fe/build/images/74d09d90e7daec2320b47050a28e0650-music.jpg"
              alt="heroImg"
              style={{ width: 440, height: 350 }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
    <Container>
    <Stack direction="row" spacing={1} padding="2px" margin={2}>
      <Chip sx={{padding:'2px',  height:' 55px'}} label="visakhapatnam"  variant="outlined"  icon={<FaceIcon />} 
    //   onDelete={handleDelete}
       />
       {/* <Chip sx={{padding:'2px', height:' 44px'}} label="Date"  variant="outlined" deleteIcon={<ArrowDropDownIcon />}
    //   onDelete={handleDelete}
       /> */}
           <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="event loaction" />}
    />
    </Stack>
    <Image/>
   
    <Box sx={{ flexGrow: 1 ,marginBottom:'25px'}}>
      <Typography component="h1"sx={{ fontSize: "1.5rem", lineHeight: "2rem",fontWeight:"700",letterSpacing:"0.25px"}}
          variant="h3">
      check out trending categories
          </Typography>
      <Grid container spacing={{ xs: 1, md: -1 }} columns={{ xs: 4, sm: 10, md: 16 }}>
      
         <Grid item xs={12} sm={4} md={4} >
                
       
            <Stack direction="row"textDecoration= 'none' spacing={0}>
            <Box sx={{
        width: 80,
        height: 30,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        textDecoration: 'none',
        py: 2.2,
      }}
    >
        < PsychologyOutlinedIcon sx={{color:"red"}} />
        </Box>
        <Box
      sx={{
        width: 210,
        height: 30,
        py: 2.2,
        backgroundColor: '#f8f7fa',
      
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4',marginLeft:"16px", color:'black',textDecoration: 'none'
    
}}
          variant="body2"    >
    Science & Tech
          </Typography>

        </Box>
        
       
      </Stack>   
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
         
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 30,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
      }}
    >
        < DiamondOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 30,
        py: 2.2,
      
     
        backgroundColor: '#f8f7fa',
       
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', marginLeft:"16px",color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
 Fashion
          </Typography>

        </Box>
      </Stack>
          </Grid>
         
          <Grid item xs={12} sm={4} md={4} >

            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 30,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
      }}
    >
        < FavoriteBorderIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 30,
        py: 2.2,
      
     
        // border:'1px solid black',
        backgroundColor: '#f8f7fa',
        // '&:hover': {
        // //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , marginLeft:"16px", my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
  Health
          </Typography>

        </Box>
        
       
      </Stack> 
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          
          <Stack direction="row" spacing={0}>
          <Box
    sx={{
      width: 80,
      height: 30,
      backgroundColor: '#fdf7f5',
      textAlign: 'center',
      py: 2.2,


      // border:'1px solid black',
      '&:hover': {
        
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  >
      < CollectionsOutlinedIcon sx={{color:"red"}} />

      </Box>
      <Box
    sx={{
      width: 210,
      height: 30,
      py: 2.2,
      textDecoration:'None',
    
   
      // border:'1px solid black',
      backgroundColor: '#f8f7fa',
      // '&:hover': {
      // //   backgroundColor: 'primary.main',
      //   opacity: [0.9, 0.8, 0.7],
      // },
    }}
  >
     <Typography component="body2"
     sx={{ alignItems:'center' , marginLeft:"16px", my:'4', color:'black',textTransform: 'none',
  
}}
        variant="body2"    >
Charity & Causes
        </Typography>

      </Box>
      
     
    </Stack>

     
  

        </Grid>
        <Grid item xs={12} sm={4} md={4} >
        
        <Stack direction="row" spacing={0}>
        <Box
  sx={{
    width: 80,
    height: 30,
    backgroundColor: '#fdf7f5',
    textAlign: 'center',
    py: 2.2,


    // border:'1px solid black',
    '&:hover': {
      
      opacity: [0.9, 0.8, 0.7],
    },
  }}
>
    < BusinessCenterOutlinedIcon sx={{color:"red"}} />

    </Box>
    <Box
  sx={{
    width: 210,
    height: 30,
    py: 2.2,
  
 
  
    backgroundColor: '#f8f7fa',
   
  }}
>
   <Typography component="body2"
   sx={{ alignItems:'center' , my:'4',marginLeft:"16px", color:'black',textTransform: 'none',

}}
      variant="body2"    >
Bussienses
      </Typography>

    </Box>
    
   
  </Stack>

    

      </Grid>
          <Grid item xs={12} sm={4} md={4} >
      
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 30,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,

  
        // border:'1px solid black',
        '&:hover': {
          
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < MusicNoteOutlinedIcon sx={{color:"red"}} />
      

        </Box>
        <Box  sx={{ width: 210,  height: 30,py: 2.2,  backgroundColor: '#f8f7fa', }} >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', marginLeft:"16px", color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
 Music
          </Typography>

        </Box>
        
       
      </Stack>

     
       
          </Grid>
          
         
          <Grid item xs={12} sm={4} md={4} >
        
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 30,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,

  
        // border:'1px solid black',
        '&:hover': {
          
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < MissedVideoCallOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 30,
        py: 2.2,
      
     
        // border:'1px solid black',
        backgroundColor: '#f8f7fa',
        // '&:hover': {
        // //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', marginLeft:"16px", color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
Film & media
          </Typography>

        </Box>
        
       
      </Stack>

   
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
       
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 30,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,

  
        // border:'1px solid black',
        '&:hover': {
          
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < GppGoodOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 195,
        height: 30,
        py: 2.2,
        paddingLeft:"16px",
      
     
        // border:'1px solid black',
        backgroundColor: '#f8f7fa',
        // '&:hover': {
        // //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
  Performing&Arts
          </Typography>

        </Box>
    
       
      </Stack>

        
   

           
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
      
      <Stack direction="row" spacing={0}>
      <Box
      sx={{
        width: 80,
        height: 30,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,

  
        // border:'1px solid black',
        '&:hover': {
          
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < RollerSkatingOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 195,
        height: 30,
        py: 2.2,
      paddingLeft:'16px',
        backgroundColor: '#f8f7fa',
      
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textDecoration: 'none',
    
}}
          variant="body2"    >
 Sports&Fitness
          </Typography>

        </Box>
  
 
</Stack>


 
    </Grid>
    
    <Grid item xs={12} sm={4} md={4} >
  
      <Stack direction="row" spacing={0}>
      <Box
sx={{
  width: 80,
  height: 30,
  backgroundColor: '#fdf7f5',
  textAlign: 'center',
  py: 2.2,


  // border:'1px solid black',
  '&:hover': {
    
    opacity: [0.9, 0.8, 0.7],
  },
}}
>
  < ConnectingAirportsOutlinedIcon sx={{color:"red"}} />

  </Box>
  <Box
sx={{
  width: 210,
  height: 30,
  py: 2.2,



  backgroundColor: '#f8f7fa',
 
}}
>
 <Typography component="body2"
 sx={{ alignItems:'center' , marginLeft:"16px", my:'4', color:'black',textTransform: 'none',

}}
    variant="body2"    >
Travel & Outdoor
    </Typography>

  </Box>
  
 
</Stack>

  

    </Grid>
    <Grid item xs={12} sm={4} md={4} >
  
      <Stack direction="row" spacing={0}>
      <Box
sx={{
  width: 80,
  height: 30,
  backgroundColor: '#fdf7f5',
  textAlign: 'center',
  py: 2.2,


  // border:'1px solid black',
  '&:hover': {
    
    opacity: [0.9, 0.8, 0.7],
  },
}}
>
  < LocalBarOutlinedIcon sx={{color:"red"}} />

  </Box>
  <Box
sx={{
  width: 210,
  height: 30,
  py: 2.2,


  // border:'1px solid black',
  backgroundColor: '#f8f7fa',
  // '&:hover': {
  // //   backgroundColor: 'primary.main',
  //   opacity: [0.9, 0.8, 0.7],
  // },
}}
>
 <Typography component="body2"
 sx={{ alignItems:'center' , my:'4',marginLeft:"16px", color:'black',textTransform: 'none',

}}
    variant="body2"    >
Food&Drink
    </Typography>

  </Box>
  
 
</Stack>


    </Grid>
    <Grid item xs={12} sm={4} md={4} >
 
      <Stack direction="row" spacing={0}>
      <Box
sx={{
  width: 80,
  height: 30,
  backgroundColor: '#fdf7f5',
  textAlign: 'center',
  py: 2.2,
}}
>
  < RollerSkatingOutlinedIcon sx={{color:"Red"}} />
  </Box>
  <Box
sx={{
  width: 210,
  height: 30,
  py: 2.2,
  backgroundColor: '#f8f7fa',
 
}}
>
 <Typography component="body2"
 sx={{ alignItems:'center' , my:'4', marginLeft:"16px", color:'black',textDecoration: 'none'}}
    variant="body2" > Government </Typography>
</Box>
</Stack> 
    </Grid>
      </Grid>
    </Box>
    </Container>
    </>
  );
};

export default Hero;