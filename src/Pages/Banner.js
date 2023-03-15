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

const Banner = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "white",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));


  return ( 
    <ThemeProvider theme={theme}>
    <Box sx={{ backgroundImage: `url(https://cdn.evbstatic.com/s3-build/fe/build/images/3dda1fe7cc8fd474bda27512b31c1cb2-6_tablet_1067x470.jpg)` }}
    // sx={{ backgroundImage: "#E6F0FF", minHeight: "80vh" }}
    >
      <Container>
        {/* <Navbar /> */}
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "white",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Besnik Agency
            </Typography>
            <Title variant="h1"
              sx={{ my: 7}}>
            Now Is your time
            </Title>
       
          
          
           
            <ColorButton  sx={{ my: 7}}
              type="submit"
            //   fullWidth
            backgroundColor="red"
              variant="contained"
            //   size="large"
            
            //   className={classes.btngoggle}
            >
          Find your next event
            </ColorButton>
          </Box>

         
        </CustomBox>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Banner;