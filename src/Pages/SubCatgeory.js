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
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },

  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
const Hero = () => {
  const [values, setValue] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setValue(dropdownValues())
    console.log('values', values)
  });
  const dropdownValues = async ()=>{
    const response =await api.get("https://api.countrystatecity.in/v1/countries", {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0",
      "Accept": "application/json"
    })
    console.log(response)
  }
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(7),
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
    margin: theme.spacing(10, 0, -10, 0),
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
      <Chip sx={{padding:'2px',  height:' 44px'}} label="visakhapatnam"  variant="outlined"  icon={<FaceIcon />} 
    //   onDelete={handleDelete}
       />
       <Chip sx={{padding:'2px', height:' 44px'}} label="Date"  variant="outlined" deleteIcon={<ArrowDropDownIcon />}
    //   onDelete={handleDelete}
       />
           <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </Stack>
    <Image/>
   
    <Box sx={{ flexGrow: 1 }}>
      <Typography component="h1"sx={{ fontSize: "1.5rem", lineHeight: "2rem",fontWeight:"700",letterSpacing:"0.25px"}}
          variant="h3">
      check out trending categories
          </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
      
         <Grid item xs={2} sm={4} md={4} >
                
       
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
          <Grid item xs={2} sm={4} md={4} >
         
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
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
 Fashion
          </Typography>

        </Box>
      </Stack>
          </Grid>
         
          <Grid item xs={2} sm={4} md={4} >

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
          <Grid item xs={2} sm={4} md={4} >
          
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
        <Grid item xs={2} sm={4} md={4} >
        
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
          <Grid item xs={2} sm={4} md={4} >
      
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
          
         
          <Grid item xs={2} sm={4} md={4} >
        
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
          <Grid item xs={2} sm={4} md={4} >
       
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
        width: 210,
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
          <Grid item xs={2} sm={4} md={4} >
      
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
        width: 210,
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
    
    <Grid item xs={2} sm={4} md={4} >
  
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
    <Grid item xs={2} sm={4} md={4} >
  
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
    <Grid item xs={2} sm={4} md={4} >
 
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
    <View/>


    
   
    </>
  );
};

export default Hero;