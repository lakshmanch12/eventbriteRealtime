import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Seemorefirst from './Seemorefirst';
import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
const seemore = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
            <Navbar/>
            </ThemeProvider>
            <Seemorefirst/>
            <Footer/>
    </div>
  )
}

export default seemore