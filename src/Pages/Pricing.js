import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Eventcontent from './Eventcontent';
import Pricingone from './Pricingone';
import Pricingtwo from './Pricingtwo';
import Pricingthree from './Pricingthree';
import Pricingfour from './Pricingfour';

import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import Grid from '@mui/material/Grid';



const Pricing  = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
            
            <Header/>
            </ThemeProvider>
            <Pricingone/>
           <Pricingtwo/>
          < Pricingthree/>
          {/* < Pricingfour/> */}
            
            <Footer/>
    </div>
  )
}

export default Pricing