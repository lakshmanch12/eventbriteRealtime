
import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import { Box, Button, styled, Typography } from "@mui/material";



const salesvedio = () => {
  return (
    <Box sx={{}}>
        
        <video  style={{ width: "100%", height: "100%" , objectFit:"cover"}}src={videoBg} autoPlay loop muted />
        


    </Box>
  
  )
}

export default salesvedio