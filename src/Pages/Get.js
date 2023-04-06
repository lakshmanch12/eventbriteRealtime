import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {Paper,Typography,Stack} from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import List from '@mui/material/ImageList';
import ListItem from '@mui/material/ImageListItem';


const itemData = [

  {
   
    title: 'Food',
  },
  {
    title: 'Education',
  },
  {
    title: 'pop',
  },
  {
    title: 'Design',
  },
  {
    title: 'R&B',
  },
  {
    title: 'Hip/hop& Rap',
  },
  {
    title: 'Film',
  },
  {
    title: 'Hats',
  },
  {
    title: 'PersonalHealth',
  },
  {
    title: 'Blues&Buzz',
  },
  {
    title: 'Travel',
  },
  {
    title: 'rock',
  },
  {
   
    title: 'Tomato basil',
  },
  {
  
    title: 'Sea star',
  },
  {
  
    title: 'Bike',
  }, {
  
    title: 'Sea star',
  },
  

];

 function Get() {

 

  return (
    <>
    
    <Paper
      sx={{
        // display: 'flex',
        flexWrap: 'wrap',
        variant:"outlined",
        p: 2,
       
        marginTop:3,
        backgroundColor:"#eeedf2"
      }}
      
    >
           <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "black",
                fontWeight: "500",
                mt: 1,
                mb: 2,
              }}
            >
            Let's make it personal
            </Typography> 
            
      <Stack direction="row">
      <List sx={{ width: "100%" ,height:"90%",display:"flex",spacing:'8' }}  rowHeight={90}>
      {itemData.map((item) => (
        <ListItem key={item.img}  >
            <Chip sx={{padding:'2px', fontSize:"", height:"44px",borderRadius:"24px",backgroundColor:"#fff"}} label={item.title}  variant="outlined"    /> 
        </ListItem>
      ))}
    </List>

     
     
    

      
    </Stack>
   

    
      
    </Paper>
    </>
  );
}
export default Get;