import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Chip from '@mui/material/Chip';


// import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(7),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#F7F154",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    margin: theme.spacing(10, 0, -10, 0),
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Home / visakhapatnam / Music</Item>
       
      </Stack>
    </Box>
    <Box sx={{ backgroundColor: "blue", minHeight: "30vh" }}>
      <Container>
   
        <CustomBox>
          <Box sx={{ flex: "1" }}>
           
            <Title variant="h1">
            Music events
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#8FF2F7", my: 4 }}
            >
            in Visakhapatnam, India
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#8FF2F7",
                fontWeight: "500",
                mt:1,
              }}
            >
           Discover the best Music events in your area and online
            </Typography>
          
          </Box>

          <Box sx={{ flex: "0.5" }}>
            <img
              src="https://cdn.evbstatic.com/s3-build/fe/build/images/74d09d90e7daec2320b47050a28e0650-music.jpg"
              alt="heroImg"
              style={{ width: 440, height: 350 }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
    <Stack direction="row" spacing={1} padding="2px" margin={2}>
      <Chip sx={{padding:'2px',  height:' 44px'}} label="visakhapatnam"  variant="outlined" ArrowDropDownIcon={<ArrowDropDownIcon />}
    //   onDelete={handleDelete}
       />
       <Chip sx={{padding:'2px', height:' 44px'}} label="Date"  variant="outlined" deleteIcon={<ArrowDropDownIcon />}
    //   onDelete={handleDelete}
       />
    </Stack>
    </>
  );
};

export default Hero;