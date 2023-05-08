import React from 'react'
import { Box, Paper,Button, styled, Typography } from "@mui/material";
import {  Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
const Findeventone = () => {
    const Item = styled(Box)(({ theme }) => ({
        // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        margin: theme.spacing(0, 0, -10, 0),
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
    <div>
         <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      <Item><Link  to="/"variant="=body2" >Home</Link>/<Link  to="/Register" variant="h6">visakhapatnam </Link></Item>
       
      </Stack>
    </Box>
    </div>
  )
}

export default Findeventone