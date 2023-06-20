

import * as React from 'react';
import Box from '@mui/material/Box';
import {Button,Typography} from '@mui/material';
import {  Link } from "react-router-dom";

import Container from '@mui/material/Container';


function BoxBtn() {
  return (
  <>
    {/* <Container
      // component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8 }}
    >
      <Link  to="/seemore" style={{ textDecoration: 'none' }}   >
      <Button
        sx={{
          border: '1px solid black',
          display:'flex',
          borderRadius: 1,
          height: '500',
          textTransform: 'none',
          color:'black',
          py: 1.2,
          px: 16,
        }}
      >
         See more 
      </Button>
      
       </Link>
    </Container> */}
       <Box    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8 }}
      >
      <Button  
      sx={{
      border: '1px solid black',
      display:'flex',
      borderRadius: 1,
      //  height: '200',
      textTransform: 'none',
      color:'black',
      py: 1.2,
      px: 15,
    }}>
    See more 
  </Button>
      </Box> 
 </>
  );
}

export default BoxBtn;