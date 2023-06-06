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
import CheckIcon from '@mui/icons-material/Check';


import CustomButton from "./CustomButton";
const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Pricingfive = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "white",
    height: "516px",
    borderRadius: "25px",
    // border:"1px solid black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(4, 4, 0, 8),
      width: "100%",
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
            sx={{ fontSize: "35px", color: "red", fontWeight: "700" }}
            icon={<CheckIcon/>}
          >
           
     No upfront fees
          </Typography>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
     Simple pricing, clear value
          </Typography>
          <Typography
            sx={{ fontSize: "15px", color: "black", fontWeight: "500" }}
          >
Create your event on the world's largest event marketplace at no cost to you. 
We've got everything you need to sell tickets, manage your events, and grow your business.
          </Typography>
        <Box sx={{marginTop:"25px"}}>

        </Box>

          <CustomButton
            backgroundColor="red"
            color="white"
            border="1px solid"
            buttonText="Get Started  for free"
            getStartedBtn={true}
           
          />
        

        
        </Box>
     
    
   </Stack>

        
       
       </Grid>
       <Grid item xs={5} sm={4} md={6} >
             
         
             <Stack direction="coloum"textDecoration= 'none' spacing={5}>
            <Box>
              <Typography
                sx={{ fontSize: "inherit", color: "black", fontWeight: "400",my: 1 }}
              > <CheckIcon sx={{color:"red"}}/>
          Flexible ticket types for one or online events

              </Typography>
              <Typography
                sx={{ fontSize: "inherit", color: "black", fontWeight: "400", my: 1}}
              >
              <CheckIcon sx={{color:"red"}}/> Unlimited listings in our marketplace

              </Typography>
              <Typography
                sx={{ fontSize: "inherit", color: "black", fontWeight: "400", my: 1 }}
              >
     <CheckIcon sx={{color:"red"}}/>Integrated email  social media marketing tools

              </Typography>
              <Typography
                sx={{ fontSize: "inherit", color: "black", fontWeight: "400" , my:1}}
              ><CheckIcon sx={{color:"red"}}/>
         Ability to sell tickets on your own site
              </Typography>
              <Typography
                sx={{ fontSize: "inherit", color: "black", fontWeight: "400", my:1 }}
              ><CheckIcon sx={{color:"red"}}/>
    Seamless attendee checkout experience

              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "400" , my:1}}
              ><CheckIcon sx={{color:"red"}}/>
    Payouts before your event happens
              </Typography>
              <Typography
                sx={{ fontSize: "inherit", color: "black", fontWeight: "400" , my:1}}
              >
  <CheckIcon sx={{color:"red"}}/>Detailed analytics and reporting
              </Typography>
            </Box>
         
        
       </Stack>
    
            
           
           </Grid>
           <Grid item xs={5} sm={4} md={5}  >
             
         
             <Stack direction="row"textDecoration= 'none' spacing={0} >
            <Box sx={{backgroundColor:"#f9f9fb"}}>
            <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
 Low fees for your attendees
          </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500" }}
              >
           No fees for free events
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500" }}
              >
       3.7% + $1.79 Service Fee
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500" }}
              >
     2.9% Payment Processing Fee
              </Typography>
              <Typography
                sx={{ fontSize: "13px", color: "black", fontWeight: "500",  my:2 }}
              >
    Fees are paid by ticket buyers, unless you choose to cover them.
              </Typography>

              <Typography
                sx={{ fontSize: "13px", color: "blue", fontWeight: "400" }}
              >
Find out more about how fee works
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

export default Pricingfive;