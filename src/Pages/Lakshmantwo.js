import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Salessix from './Salessix';
import Salesseven from './Salesseven';
import videoBg from '../assets/videoBg.mp4'



import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Lakshmantwo = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
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
      marginTop:"-205px",
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

      <Typography
        variant="h3"
        sx={{ fontSize: "55px", fontWeight: "bold", color: "white", marginTop: 50, marginBottom:20}}
      >
Eventbrite Developer
      </Typography>

   
      
    
     

    

      
   
    
    </Box>
  );
};

export default Lakshmantwo;