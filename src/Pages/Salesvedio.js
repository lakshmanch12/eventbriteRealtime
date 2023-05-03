
import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import { Box, Button, styled, Typography } from "@mui/material";



const salesvedio = () => {
  return (
    <Box sx={{}}>
        
        {/* <div  style={{ width: "100%", height: "100" , top: 10,  position: "relative", backgroundColor: "rgba(0,0,0,.4)"}}></div> */}
        <video  style={{ width: "100%", height: "100%" , objectFit:"cover"}}src={videoBg} autoPlay loop muted />
        {/* <div  style={{ width: "100%", height: "100" ,  top: -490, alignItems:"center", justifyContent: "center", color:"green",   position:"relative",  display: "flex", flexDirection: "column",}}>
        <Typography
        variant="h3"
        sx={{ fontSize: "88px", fontWeight: "700", color: "#fff",lineHeight:"99px", my: 0 }}
      >
 Power Your Growth 
 
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "88px", fontWeight: "700", color: "#fff",lineHeight:"99px", my: 0 }}
      >
  With Eventbrite
      </Typography>
          
        </div> */}


    </Box>
  
  )
}

export default salesvedio