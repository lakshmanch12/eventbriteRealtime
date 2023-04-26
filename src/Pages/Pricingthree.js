import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Stack from '@mui/material/Stack';
// import { experimentalStyled as styled } from '@mui/material/styles';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import {  Link } from "react-router-dom";


import CustomButton from "./CustomButton";
const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Pricingthree = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    // backgroundColor: "#f8f7fa",
    height: "716px",
    borderRadius: "15px",
    // border:"1px solid black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(4, 3, 0, 8),
      width: "90%",
      gap:"5"
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer >
      <Grid container spacing={{ xs: 4, md: 8 }} columns={{ xs: 4, sm: 8, md: 16 }}>
      
      <Grid item xs={5} sm={4} md={5} >
             
         
         <Stack direction="row"textDecoration= 'none' spacing={0}>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
       Frequently asked questions
          </Typography>
        

        
        </Box>
     
    
   </Stack>

        
       
       </Grid>
       <Grid item xs={5} sm={4} md={5} >
             
         
             <Stack direction="coloum"textDecoration= 'none' spacing={5}>
            <Box>
              <Typography
                sx={{ fontSize: "15px", color: "black", fontWeight: "700" }}
              >
            Can I change my package?

              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500", my: 1}}
              >
                Yes! If you’re interested in a custom package, contact our Sales Partnerships Team.
                 Any changes will apply only to events created after you make the change.
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "black", fontWeight: "700", marginTop:"60px" }}
              >
        Is Eventbrite free to use if my events are free?

              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500" , marginTop:"20px"}}
              >
                Yes! It's free to use Eventbrite to post your event. We never charge fees for tickets to free events.
                 If you have paid ticket options, fees are paid by your attendees by default.
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "black", fontWeight: "700", marginTop:"80px" }}
              >
        How do I pay my fees?

              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500" , marginTop:"20px"}}
              >
              Most organizers pass fees to their attendees, and pay nothing out of pocket to use Eventbrite! By default, when using Eventbrite Payment Processing, your attendees will automatically pay fees but you have the option to "absorb"
               your fees and pay them out of your ticketing revenue, if you'd rather.
              </Typography>
            </Box>
         
        
       </Stack>
    
            
           
           </Grid>
           <Grid item xs={5} sm={4} md={5} >
             
         
             <Stack direction="row"textDecoration= 'none' spacing={0}>
            <Box>
              <Typography
                sx={{ fontSize: "15px", color: "black", fontWeight: "700" }}
              >
           What is a "ticket type"?
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500", my: 3 }}
              >
               We offer tailored packages for event pros withkejrfhk rjfhkerjfhk unique needs. Get customized fee schedule, personalized support, and more individualized features by partnering with our sales team.
              </Typography>

              <Typography
                sx={{ fontSize: "15px", color: "black", fontWeight: "700" }}
              >
       Do packages and prices differ by location or currency?
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500", marginTop:"20px" }}
              >
                Yes! Eventbrite's pricing* is based on your event location & currency of event. However, free tickets and events are free. Click here to see packages and pricing for every supported currency.
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "700" }}
              >
      * Additional payment processing fees or tax may be applicable
              </Typography>
              <Typography
                sx={{ fontSize: "15px", color: "black", fontWeight: "700", marginTop:"20px" }}
              >
          What if I don't want to list my event on Eventbrite and partner sites?
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500" ,marginTop:"10px"}}
              >
     When you create a new event, you'll have the opportunity to set your event as "Public" or "Private." If you choose "Private", it won't be listed on Eventbrite or any of our partner sites. If you choose "Public",
      the event will be listed on both Eventbrite and its partner sites to help you reach new audiences.
              </Typography>
            </Box>
         
        
       </Stack>
    
            
           
           </Grid>
         
       
      
   </Grid>
        
        {/* <Box>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
         Hosting a large or complex event?
          </Typography>
          <Typography
            sx={{ fontSize: "13px", color: "black", fontWeight: "500", my: 3 }}
          >
           We offer tailored packages for event pros withkejrfhk rjfhkerjfhk unique needs. Get customized fee schedule, personalized support, and more individualized features by partnering with our sales team.
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="black"
            border="1px solid"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box> */}
        

        {/* <img
        src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/Contact+Sales_Pricing.svg"
        //   src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        /> */}
      </CustomContainer>
    </CustomBox>
  );
};

export default Pricingthree;