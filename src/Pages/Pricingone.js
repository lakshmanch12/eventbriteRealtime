import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./Theme"
import {ThemeProvider} from "@material-ui/core";
import { red } from '@mui/material/colors';
import Pricingfive from './Pricingfive';

// import heroImg from "../media/hero_illustration.png";
// import CustomButton from "./CustomButton";

const Pricingone = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(7),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
 
    },
  }));

 
 


  return ( 
    <ThemeProvider theme={theme}>

    <Box 
         sx={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlj_IyOCPlgGe3n0rudL1pTrYf19yGJBTIhnddsVs52Tf8GjVo)`,
         backgroundSize: "cover", Height: "40vh"
        }}
         >
            <Container>
       
        <CustomBox 
         sx={{ 
          minHeight: "40vh",marginTop:"70px",
        //   border: '1px solid black',
        justifyItems:"center",
          backdropFilter:"blur(20px)",
          backgroundSize: "cover",
          display:"flex",
        //   filter:"blur(50px) brightness(1.9)",
        }} 
         >
            
            <Box sx={{marginTop:"20px"}} >
            <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              fontSize: "5.23rem",
              lineHeight:"4.688rem",
              color: "#3B3c45",
              my: 1,
            }}
          >
           JOIN OUR COMMUNITY.
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "400",
              fontSize: "5.25rem",
              lineHeight:"4.688rem",
              letterSpacing:".063rem",
            
              color: "#3B3c45",
              my: 1,
            }}
          >
          GROW YOURS.
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              fontSize: "1.25rem",
              lineHeight:"2.0rem",
              letterSpacing:".016rem",
            
              color: "#3B3c45",
              my: 1,
            }}
          >
        Reach 90 million eventgoers on the world's largest event marketplace.
          </Typography>
          </Box>
         
        </CustomBox>
        <Pricingfive/>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Pricingone;