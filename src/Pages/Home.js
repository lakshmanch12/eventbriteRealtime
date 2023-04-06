import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner';
import Footer from './Footer';
import Content from './Content';
import BoxBtn from './BoxBtn';
// import Bar from './Bar';
import Get from './Get';
// import Post from './Post';
import Tablist from './Tab';
import {ThemeProvider, Box,Button,Container,Typography} from "@material-ui/core";
import theme from './Theme';
import Post from './Post';
import { useLocation } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';

const Home = (props) => {
  const {state}=useLocation();
  console.log("state",state)
  return (
    <div>
        <ThemeProvider theme={theme}>
            
             {/* i am your  home page  */}
             {/* <Typography
             varient="h2"
             >
             welcome {state}
             </Typography>
             */}

             <Navbar/>
             </ThemeProvider>
             <Banner/>
            
             <CssBaseline />
             <Container >
        
            <Content/>
            <Tablist/>
            <Post/>
            <Get/>
            <BoxBtn/>
            

      
   

          

         
      </Container>
             <Footer/>
            
    </div>
  )
}

export default Home