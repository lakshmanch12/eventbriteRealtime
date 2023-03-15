import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {Paper,Typography,Stack} from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(2),
}));


 function Get() {

 

  return (
    <Paper
      sx={{
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        variant:"outlined",
        p: 4,
     marginTop:3,
      }}
      component="ul"
    >
          <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "black",
                fontWeight: "500",
                mt: 5,
                mb: 4,
              }}
            >
              Welcome to Besnik Agency
            </Typography>
      <Stack direction="row" spacing={2}>
      <Chip variant="outlined" size="large" label="Comedy" />
      <Chip variant="outlined" size="large" label="Food" />
      <Chip variant="outlined" size="large" label="Education" />
       <Chip variant="outlined" size="large" label="pop" />
       <Chip variant="outlined" size="large" label="Design" />
       <Chip variant="outlined" size="large" label="R&B" />
       <Chip variant="outlined" size="large" label="Hip/Hop&Rap"/>
       <Chip variant="outlined" size="large" label="Film"/>
       <Chip variant="outlined" size="large" label="personal Health" />
       <Chip variant="outlined" size="large" label="BluesjaZZ"/>
       <Chip variant="outlined" size="large" label="Travel"/>
       <Chip   variant="outlined" size="large" label="Rock" ></Chip>
          <Chip variant="outlined" size="large" label="Yoga" />

      
    </Stack>
    <Stack direction="row" spacing={2} 
    sx={{
       
        mt: 5,
    
      }}>
          
          <Chip variant="outlined" size="large" label="Country" />
          <Chip variant="outlined" size="large" label="Startups & Small Business" />
          <Chip variant="outlined" size="large" label="Classical" />
          <Chip variant="outlined" size="large" label="Mental health" />
          <Chip variant="outlined" size="large" label="TV" />
          <Chip variant="outlined" size="large" label="Alternative" />
          <Chip variant="outlined" size="large" label="Musical"/>

   

      
     
      
    </Stack>

    
      
    </Paper>
  );
}
export default Get;