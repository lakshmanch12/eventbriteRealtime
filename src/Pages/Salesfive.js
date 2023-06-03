import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Salessix from './Salessix';
import Salesseven from './Salesseven';
import videoBg from '../assets/videoBg.mp4'



import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Salesfive = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "48%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  const CustomBox1 = styled(Box)(({ theme }) => ({
    width: "48%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      marginTop:"-05px",
        backgroundColor: "#000339",
      }}
    >
          
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
<CustomBox1>
      <Typography
        variant="h3"
        sx={{ fontSize: "55px", fontWeight: "bold",textAlign: "center", color: "white", my: 3 }}
      >
   The leading choice for your business
      </Typography>
      </CustomBox1>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "white",
            textAlign: "center",
          }}
        >
         Calling all experienced events organizers! Our team of experts helps mid to large-scale event organizers accelerate their business growth and get the most ROI from our global events platform.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "white",
            textAlign: "center",
            marginTop:"30px"
          }}
        > 
        From ticketing to marketing to payments, Eventbrite has all the tools you need to convert prospects into attendees, and attendees into a loyal following.
        </Typography>
      </CustomBox>
      <CustomBox1>
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold",textAlign: "center", color: "white", my: 3 }}
      >
Delivering more attendees and a better experience
      </Typography>
      </CustomBox1>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "white",
            textAlign: "center",
          }}
        >
         TAG has seen 22% increase of its concert ticket sales come from Eventbrite, bringing new audiences to the venue.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            color: "white",
            textAlign: "center",
            marginTop:"30px"
          }}
        > 
        From ticketing to marketing to payments, Eventbrite has all the tools you need to convert prospects into attendees, and attendees into a loyal following.
        </Typography>
      </CustomBox>

    

      < Salessix/>
      < Salesseven/>
    
    </Box>
  );
};

export default Salesfive;