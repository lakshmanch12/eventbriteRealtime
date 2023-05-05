import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Eventcontent from './Eventcontent';
import Lakshmanone from './Lakshmanone';
import Lakshmantwo from './Lakshmantwo';
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
            
            <Header/>
            </ThemeProvider>
            < Lakshmantwo/>
          < Lakshmanone/>
            
            <Footer/>
    </div>
  )
}

export default Lakshman