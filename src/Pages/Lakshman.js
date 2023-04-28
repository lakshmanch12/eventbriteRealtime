import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Eventcontent from './Eventcontent';
import Lakshmanone from './Lakshmanone';
import Pricingtwo from './Pricingtwo';
import Pricingthree from './Pricingthree';
import Pricingfour from './Pricingfour';

import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import Grid from '@mui/material/Grid';



const Lakshman  = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
            
            <Navbar/>
            </ThemeProvider>
          
          < Lakshmanone/>
            
            <Footer/>
    </div>
  )
}

export default Lakshman