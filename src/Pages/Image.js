import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack, Button, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { experimentalStyled as styled } from '@mui/material/styles';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import MissedVideoCallOutlinedIcon from '@mui/icons-material/MissedVideoCallOutlined';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { ThemeProvider } from "styled-components";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from "react";
import { Link } from "react-router-dom";

import Container from '@mui/material/Container';



import TagFacesIcon from '@mui/icons-material/TagFaces';
import List from '@mui/material/ImageList';
import ListItem from '@mui/material/ImageListItem';

const SizedAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;

const itemData = [

  {

    title: 'Tomato basil',
  },
  {

    title: 'Sea star',
  },
  {

    title: 'Bike',
  }, {

    title: 'Sea star',
  },


];



const Image = (children) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const totalItems = [
    { name: "Conferences", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/d1c0298bfb7916421c39773be5b5baa9-conference.jpg' },
    { name: "Seminars", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/26deedacbfdd67f8b67ef0a7746e47a3-seminar.jpg' },
    { name: "Expos", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/c05d863c1a1f2b19645f79529991a327-expo.jpg' },
    { name: "Conventions", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/db906230aa412f012ac57185f5ab3844-convention.jpg' },
    { name: "Festivals", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/8309d0fc55992e28f04edd815e2b63c0-festival.jpg' },
    { name: "Performances", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/e3f20fc0d207038dcb05294eabd352ff-performance.jpg'},
    { name: "screenings", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/773b5241e7be0ef600ce420836bed98c-screening.jpg' },
    { name: "galas", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/e4f9417760a0a7f29217a2c2656cd5a6-gala.jpg' },
    { name: "Classes", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/e4f9417760a0a7f29217a2c2656cd5a6-gala.jpg' },
    { name: "Networking", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/1d41a779e78a37ad7a8e291f23744d4a-networking.jpg' },
    { name: "Parties", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/4e5ea84abb1b77ed6de32ef659ca67a1-party.jpg' },
    { name: "Ralies", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/cf7fd7532ccc4be168f3e53f4033247c-rally.jpg' }, 
    { name: "Tournments", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/cf7fd7532ccc4be168f3e53f4033247c-rally.jpg' } ,
    { name: "Games", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/78a8ee4a8d5bd7ce28d656d0d40aec3e-game.jpg' },
    { name: "Races", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/2520bc117b9d962f4a692ba041bb8ab5-race.jpg' },
    { name: "Tours", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/73aac1a7011106284d691a713062e35a-tour.jpg' }
  
  ]
  const [items, setItems] = useState(totalItems.slice(0,8))
const showMoreBtn = () =>{
  setShowMore(!showMore);
  if(showMore){
    setItems(totalItems);
  } else {
    setItems(totalItems.slice(0,8))
  }
}
  return (
    <ThemeProvider theme={theme}>

      <Container
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
      >


        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTsMkdoH9enqqWwzOBnUVBLA_mMXdaeYnIxBAU5zX5DMHB5SRu-"
          sx={{
            width: 96, height: 96,
          }}
        />
        <Typography component="h1"
          sx={{ fontSize: "1.5rem", marginBottom: "5px", lineHeight: "2rem", fontWeight: "700", letterSpacing: "0.25px" }}
          variant="h3">
          We couldn't find anything
        </Typography>
        <Typography component="h1"
          sx={{ fontSize: "1.125rem", marginBottom: "5px", color: "#6f7287", lineHeight: "1.5rem", fontWeight: "700", letterSpacing: "0.25px" }}
          variant="h3">
          Adjust your filters and try again
        </Typography>

      </Container>
      <Box sx={{ flexGrow: 1 }}>

        <Typography component="h1"
          sx={{ fontSize: "1.5rem", marginBottom: "5px", lineHeight: "2rem", fontWeight: "700", letterSpacing: "0.25px" }}
          variant="h3">
          Explore music event formats
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>

         
            {
              items.map(i=> {
                return  <Grid item xs={12} sm={4} md={4} direction="row" >
                <Box sx={{
                  width: 80,
                  height: 30,
                  textAlign: 'center',
                  textDecoration: 'none',
                  py: 2.2,
                }}
                >
                  <Avatar 
                    alt="Remy Sharp"
                    src={i.image}
                    sx={{ width: 66, height: 66,marginTop:3 }}
                  />
                  
                </Box>
                <Box
                  sx={{
                    // width: 210,
                    height: 30,
                    py: -3.7,
                    px:10,
                    
                  }}
                >
                  <Typography component="body2"  variant="body2"    >
                    {i.name}
                  </Typography>
                </Box>
                </Grid>
              })
            }
            
            <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
       <Button    sx={{
        borderRadius: 1,
        textTransform: 'none',
        py: 1.2,
        px: 4,
      }}
           onClick={showMoreBtn}
          >{showMore ? 'show more' : 'show less'}</Button>
    
        
    </Container>
         

          
        </Grid>
      </Box>
      <Typography component="h1"
        sx={{ fontSize: "1.5rem", marginTop:"10px", marginBottom: "5px", lineHeight: "2rem", fontWeight: "700", letterSpacing: "0.25px" }}
        variant="h3">
        Music event time options
      </Typography>
      <Paper
        sx={{
          // display: 'flex',
          flexWrap: 'wrap',
          variant: "outlined",
          p: 2,
          marginBottom: 6,
          marginTop: 1,
          backgroundColor: "#f8f7fa"
        }}

      >




        <List sx={{ width: "100%", height: "90%", display: "flex" }} rowHeight={100}>
          {/* {itemData.map((item) => ( */}
          <ListItem

          >
            <Stack direction="row" textDecoration='none' spacing={3}>
              {itemData.map((item) => (
                <Box key={item.img} sx={{
                  width: 300,
                  height: 106,
                  backgroundColor: "white",
                  textAlign: 'center',
                  textDecoration: 'none',
                  // py: -1.2,

                }}
                >
                  <Avatar
                    sx={{
                      width: 76, height: 76, alignItems: 'center',
                      my: '4', marginLeft: "-19px", marginTop: "-5px", color: 'blue', textDecoration: 'none', backgroundColor: "#f8f7fa"
                    }}
                  >  <AccessTimeIcon /> </Avatar>



                  <Typography component="body2"
                    sx={{ alignItems: 'center',
                    //  my: '4', 
                    //  marginLeft: "18px",
                    //   marginTop: "26px",
                    //   py: -3.7,
                    //   px:10,
                       color: 'blue', textDecoration: 'none' }}
                    variant="body2"    >
                    Today
                  </Typography>

                </Box>
                
              ))}



            </Stack>
          </ListItem>

          {/* ))} */}
        </List>











      </Paper>
    </ThemeProvider>
  )
}

export default Image;