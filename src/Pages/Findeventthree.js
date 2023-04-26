import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@mui/material/Input';
import axios from "axios";
import { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
    box: {
      margin: theme.spacing(4, 2),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
   
    chip:{
        color:"red",
      
    },
 
  }));
  const styles = {
    'input-label': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      color: 'red'
    },
  
    'input': {
      '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: 'blue !important'
      }
    }
  };
  

const Findeventthree = () => {
    const classes = useStyles();
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(15),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  const [currLocation, setCurrLocation] = useState({});
const [currLocationJs, setCurrLocationJs] = useState({});
useEffect(() => {
  getLocation();
  getLocationJs();
}, []);

const getLocation = async () => {
  const location = await axios.get("https://ipapi.co/json");
  setCurrLocation(location.data);
  console.log(location.data,"location.data")
};

const getLocationJs = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { latitude, longitude } = position.coords;
    setCurrLocationJs({ latitude, longitude });
  });
};

  return (
    <Box sx={{ minHeight: "60vh" }}>
      <Container>
     
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "1 px solid black",
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
              Best events in
            </Typography>
            <Box   className={classes.box}>
          <KeyboardArrowDownIcon  
          sx={{  color:"#002dbd"}}
          />
           <Input  sx={{  fontSize: "30px",
           color:"#002dbd  ! important", opacity:"2", fontWeight: '900',lineHeight:"40px" ,letterSpacing: ".5px"}}
            placeholder= "visakhapatnam"
            //  {currLocation.city}
           />
   
       </Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "black", my: 4 }}
            >
        Looking for things to do in Visakhapatnam? Whether you're a local, new in town or just
         cruising through we've got loads of great tips and events. 
        You can explore by location, what's popular, our top picks, free stuff... you got this. Ready?
            </Typography>
            {/* <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            /> */}
          </Box>

          <Box 
          sx={{ flex: "2.65",marginTop:"30px",
          backgroundImage: `url(https://www.shutterstock.com/image-vector/blue-dark-black-abstract-background-260nw-1081094726.jpg)`,
          borderRadius: 6,
          // minHeight: "40vh",
          // marginTop:"70px",
          border: '1px solid black',
          backdropFilter:"blur(20px)",
          backgroundSize: "cover",
          display:"flex", 
        }}
          >
            <Box>
            <img
              sx={{   borderRadius: 6,}}
            src="https://i.ytimg.com/vi/0r2FA3rKq88/maxresdefault.jpg"
              alt="heroImg"
              style={{ maxWidth: "100%",  borderRadius: 125,
             backgroundColor: "red" }}
            />
           </Box>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Findeventthree;