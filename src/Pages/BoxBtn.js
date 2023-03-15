

import * as React from 'react';
import Box from '@mui/material/Box';
import {Button,Typography} from '@mui/material';
import {  Link } from "react-router-dom";

import Container from '@mui/material/Container';


function BoxBtn() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Link  to="/SeeMore"    >
      <Button
        sx={{
          border: '1px solid black',
          borderRadius: 0,
          height: '500',
          textTransform: 'none',
          
          py: 1.2,
          px: 24,
        }}
      >
    
         See more 
        
      </Button>
       </Link>
    </Container>
  );
}

export default BoxBtn;