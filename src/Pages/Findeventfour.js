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
    count:"2941 followers",
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F89593685%2F303007241545%2F2%2Foriginal.png?h=200&w=200&auto=format%2Ccompress&q=75&sharp=10&s=d421f0246548fbb5ab784f053a67f052'
  },
  {
    title: 'Skyschools',
    count:"4641 followers",
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F189290609%2F619034277113%2F1%2Foriginal.20211120-091415?h=200&w=200&auto=format%2Ccompress&q=75&sharp=10&rect=514%2C0%2C2480%2C2480&s=4022938864f0a7022b0e7d1603836892'
  },
  {
    title: 'medation',
    count:"6741 followers",
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F106948530%2F166312578381%2F1%2Foriginal.20200724-203636?h=200&w=200&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1280%2C1280&s=9487cfccb5a9a1d68171fd8b29ff76ef'
  },
  {
    title: 'Skyschools',
    count:"5741 followers",
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F203478879%2F529658104897%2F1%2Foriginal.20211221-122011?h=200&w=200&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C22%2C2294%2C2294&s=e01e23f48ec18e4ad068497e6b305b6d'
  },
  {
    title: 'Design',
    count:"4741 followers",
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F89593685%2F303007241545%2F2%2Foriginal.png?h=200&w=200&auto=format%2Ccompress&q=75&sharp=10&s=d421f0246548fbb5ab784f053a67f052'

  },
  {
    title: 'Archives',
    count:"7541 followers",
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F106948530%2F166312578381%2F1%2Foriginal.20200724-203636?h=200&w=200&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1280%2C1280&s=9487cfccb5a9a1d68171fd8b29ff76ef'

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
     
      <CardContent sx={{ maxWidth: 945, padding:'25px',textAlign:"center" }}>
      {/* <Avatar
        alt="Remy Sharp"
        src=""
        sx={{ width: 56, height: 56, padding:"25px" }}
      /> */}
       <Avatar 
                    alt="Remy Sharp"
                    src={item.image}
                    sx={{ width: 96, height: 96,}}
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