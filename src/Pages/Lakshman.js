import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Eventcontent from './Eventcontent';
import Lakshmanone from './Lakshmanone';
import Lakshmantwo from './Lakshmantwo';
import Pricingtwo from './Pricingtwo';
import Pricingthree from './Pricingthree';
import Pricingfour from './Pricingfour';
import Demo3 from './Demo3';
import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import Grid from '@mui/material/Grid';
const Lakshman  = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
            <Navbar/>
            </ThemeProvider>
            < Lakshmantwo/>
          < Lakshmanone/>
            <Footer/>
            <Demo3/>

    </div>
  )
}

export default Lakshman