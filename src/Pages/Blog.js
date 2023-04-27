import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./Theme"
import {ThemeProvider} from "@material-ui/core";
import { red } from '@mui/material/colors';

// import heroImg from "../media/hero_illustration.png";
// import CustomButton from "./CustomButton";

const Blog = () => {
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
         sx={{ backgroundImage: `url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJu_lEehE4Cn6R1HFV6Og61twFPBwFyBiNFJmEwUaH8wPq1l5K)`,
     
         backgroundSize: "cover",
        }}
         >
            <Container>
       
        <CustomBox 
         sx={{ backgroundImage: `url(https://www.shutterstock.com/image-vector/blue-dark-black-abstract-background-260nw-1081094726.jpg)`,
          minHeight: "40vh",marginTop:"70px",border: '1px solid black',
          backdropFilter:"blur(20px)",
          backgroundSize: "cover",
          display:"flex",
        //   filter:"blur(50px) brightness(1.9)",
         borderRadius: 6, }} 
         >
            
            <Box >
            <img
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F455508499%2F1057323484683%2F1%2Foriginal.20230227-091231?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=faa21dfc5bc9b17227699c8cb4189a1c"
              alt="heroImg"
              style={{ maxWidth: "100%", }}
            />
          </Box>
             
      
         

         
        </CustomBox>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Blog;