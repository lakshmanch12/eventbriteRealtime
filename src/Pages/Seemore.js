import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Seemorefirst from './Seemorefirst';
import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
const seemore = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
            <Header/>
            </ThemeProvider>
            <Seemorefirst/>
            <Footer/>
    </div>
  )
}

export default seemore