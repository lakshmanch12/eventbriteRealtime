import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Container from '@mui/material/Container';

// import buyIcon from "../media/buy_icon.png";
// import sellIcon from "../media/sell_icon.png";
// import rentIcon from "../media/rent_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Salesfour = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
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
      margin: theme.spacing(8, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        sx={{ fontSize: "48px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
       Grow your business today
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
       Let’s accelerate your business growth and get the most ROI from our global events platform
        </Typography>
      </CustomBox>

 

    
        <GuideBox>
          <img  style={{ width: " 80%", height: "50%" }}
          
          src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/us_enterprise_sales_logos.jpeg" alt="buyIcon" />
          
        
        </GuideBox>
       

      

       
    

     
    </Box>
  );
};

export default Salesfour;