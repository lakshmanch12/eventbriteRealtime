import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SubCatgeory from './SubCatgeory';
import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const catgeory = () => {
  return (
   
    <div>
      <ThemeProvider theme={theme}>
            <Navbar/>
            </ThemeProvider>
            <SubCatgeory/>
         
    <Footer/>
        </div>
  )
}

export default  catgeory;