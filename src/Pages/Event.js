import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Eventcontent from './Eventcontent';
import Blog from './Blog';
import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import Grid from '@mui/material/Grid';
const Event = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
            <Navbar/>
            </ThemeProvider>
            <Blog/>
           <Eventcontent/>
            <Footer/>
    </div> )}
export default Event