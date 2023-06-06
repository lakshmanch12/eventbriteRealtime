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
const Findeventfive = (children) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  
const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const totalItems = [
    { name: "1.visakhapatanm", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/d1c0298bfb7916421c39773be5b5baa9-conference.jpg' },
    { name: "2.Hackathom", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/26deedacbfdd67f8b67ef0a7746e47a3-seminar.jpg' },
    { name: "3.Worldwide", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/c05d863c1a1f2b19645f79529991a327-expo.jpg' },
    { name: "4.Createvityphotoacdemey us", image: 'https://cdn.evbstatic.com/s3-build/fe/build/images/db906230aa412f012ac57185f5ab3844-convention.jpg' },

  
  ]

  return (
    <ThemeProvider theme={theme}>

     <Container>
     <Typography component="h1"
        sx={{ fontSize: "1.5rem", marginTop:"10px", marginBottom: "5px", lineHeight: "2rem", fontWeight: "700", letterSpacing: "0.25px" }}
        variant="h3">
       Trending Searches
      </Typography>
    
      <Paper
        sx={{
          // display: 'flex',
          flexWrap: 'wrap',
          variant: "outlined",
          p: 1,
          marginBottom: 4,
          marginTop: 1,
          backgroundColor: "white"
        }}

      >
       




        <List sx={{ width: "100%", height: "100%", display: "flex" }} >
          {totalItems.map((item) => (
          <ListItem
          >
            <Stack direction="row" textDecoration='none' spacing={3}>
              {/* {totalItems.map((item) => ( */}
                <Box key={item.name} sx={{
                  width: 260,
                  height: 70,
                  
                  backgroundColor: "white",
                  textAlign: 'center',
                  textDecoration: 'none',
                  marginTop:"25px"

                }}
                >
                  <Typography component="body2"
                    sx={{ alignItems: 'center',
                    //  my: '4', 
                    //  marginLeft: "18px",
                      marginTop: "26px",
                    //   py: -3.7,
                    //   px:10,
                    marginTop:4,
                       color: 'blue', textDecoration: 'none' }}
                    variant="body2"    >
                {item.name} 
                  </Typography>

                </Box>
                
              



            </Stack>
          </ListItem>

          ))}
        </List>


      </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default Findeventfive;