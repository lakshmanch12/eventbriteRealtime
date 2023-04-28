import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Eventcontent from './Eventcontent';
import Pricingone from './Pricingone';
import Pricingtwo from './Pricingtwo';
import Pricingthree from './Pricingthree';
import Pricingfive from './Pricingfive';
import Pricingfour from './Pricingfour';
import Salesone from './Salesone';
import Salestwo from './Salestwo';
import Salesthree from './Salesthree';
import Salesfour from './Salesfour';
import Salesfive from './Salesfive';
import Salesvedio from './Salesvedio';

import Banner from './Banner';

import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import Grid from '@mui/material/Grid';



const Pricing  = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
            
            <Navbar/>
            </ThemeProvider>
            < Salesvedio/>
            < Salesfive/>
            < Salestwo/>
            < Salesone/>
            < Pricingfour/>
            < Pricingfive/>
           <Pricingtwo/>
           <Salesthree/>
           <Salesfour/>
           <Banner/>
         
       
            
            <Footer/>
    </div>
  )
}

export default Pricing