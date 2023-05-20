import React from 'react'
import Header from './Header'
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
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import Timer from './Timer';

const Home = (props) => {
  const {state} =useLocation();
  
  console.log("state",state?.isLogin)
  return (
    <div>
       <Timer/>
        <ThemeProvider theme={theme}>
        <Navbar/>
            
             {/* {state?.isLogin ? <Navbar/> : <Header/>} */}
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