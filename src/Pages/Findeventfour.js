import * as React from 'react';
import { styled } from '@mui/material/styles';
import{Chip, Card,
    CardActionArea,
    CardContent,DialogContent, Dialog, Avatar, Button,
    CardMedia,}  from '@mui/material';
import {Paper,Typography,Stack, Container} from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import List from '@mui/material/ImageList';
import ListItem from '@mui/material/ImageListItem';
import ListItemText from '@mui/material/ListItemText';
import {  Link } from "react-router-dom";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CardActions from '@mui/material/CardActions';


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
const itemData1 = [

  {
   
    title: '  Archives',
    count:"2941 followers"
  },
  {
    title: 'Skyschools',
    count:"46941 followers"
  },
  {
    title: 'medation',
    count:"6741 followers"
  },
  {
    title: 'Skyschools',
    count:"56741 followers"
  },
  {
    title: 'Design',
    count:"4741 followers"
  },
  {
    title: 'Archives',
    count:"87541 followers"
  },
  
  

];

 function Findeventfour() {
  return (
    <>
    <Container>
    <Typography variant="body2"sx={{fontSize: "28px",   color: "black",   fontWeight: "500", mt: 1, mb: 2, }} >
            Let's make it personal
            </Typography> 
            <Typography variant="body2"sx={{fontSize: "14px",   color: "#6f7287",   fontWeight: "500", mt: 1, mb: 2, }} >
            Follow the organizers from these events and get notified when they create new ones.
            </Typography> 
    <Paper
      sx={{
        // display: 'flex',
         flexWrap: 'wrap', variant:"outlined", p: 2, marginTop:3,backgroundColor:"#f2f2f2" }} >
          
            {/* <Stack direction="row">
      <List sx={{ width: "100%" ,height:"90%",display:"flex",flexDirection: 'row', }}  rowHeight={90}>    
      <Card sx={{ maxWidth: "240px", maxHeight:"200",  m: 2.5 }} >
            <CardActionArea  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
        <Avatar 
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 76, height: 76,
       marginTop:"70px" }}>  
</Avatar>
 <CardContent sx={{ alignItems: 'center'}}>
 <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
<Typography  sx={{color:"#1e0a3c", fontWeight:" 700",marginTop:'25px',marginBottom:'5px'}}variant="h5">
The national Archives
</Typography>
     <Button    variant="outlined"
        sx={{ textTransform: 'none', marginBottom:'55px',  py: 1.2,  px: 5, }}> Follow
     </Button>
       </Container>
              </CardContent>
            </CardActionArea>
          </Card>
       
        
    </List>
    
    </Stack> */}
    <Stack direction="row">
      <List sx={{ 
        width: "100%",
      height:"100%",
      display:"flex",
      spacing:'20' 
    
      }}  >
     
      {itemData1.map((item) => (
        <ListItem    sx={{  padding:'8px'}}
        key={item.img} 
         >
                    <Card sx={{ maxWidth: 945, padding:'25px',textAlign:"center" }}>
                    <Stack direction="column" spacing={2} >
     
     
      
    </Stack>
     
      <CardContent>
      <Avatar
        alt="Remy Sharp"
        src=""
        sx={{ width: 56, height: 56, padding:"25px" }}
      />
        <Typography gutterBottom variant="h5" component="div" sx={{marginTop:"20px", fontSize:"20px"}}>
        {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
       {item.count}
        </Typography>
        <Button  variant='outlined' sx={{marginTop:"20px" , color:"blue"}}>F0llow</Button>
      </CardContent>
      
    </Card>
          
       
            {/* <Chip sx={{padding:'2px', fontSize:"", height:"44px",borderRadius:"24px",backgroundColor:"#fff"}}  */}
            label= {item.title} 
             variant="outlined"    /> 
        </ListItem>
      ))}
    </List>
    </Stack>
            
      
    </Paper>
   
    </Container>
    {/* <Stack direction="row">
    {itemData.map((item) => (
        <ListItem    sx={{  padding:'30px'}}
        key={item.img} 
         >
                    <Card sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> 
       
            
        </ListItem>
      ))}
      </Stack> */}
    </>
  );
}
export default Findeventfour;