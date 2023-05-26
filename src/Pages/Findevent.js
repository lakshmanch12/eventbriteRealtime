import React from 'react';
import Navbar from './Navbar';
import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import Footer from './Footer';
import Findeventone from './Findeventone';
import Content from './Content';
import Findeventtwo from './Findeventtwo';
import Findeventthree from './Findeventthree';
import Findeventfour from './Findeventfour';
import Findeventfive from './Findeventfive';



const findevent = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
            <Navbar/>
            </ThemeProvider>
            <Findeventone/>
            <Findeventthree/>
            <Findeventtwo/>
            <Findeventfive/>
            <Findeventfour/>
            <Footer/>
    </div>
  )
}

export default findevent