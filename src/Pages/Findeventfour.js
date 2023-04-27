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

 function Findeventfour() {

 

  return (
    <>
    <Container>
    <Paper
      sx={{
        // display: 'flex',
         flexWrap: 'wrap', variant:"outlined", p: 2, marginTop:3,backgroundColor:"#eeedf2" }} >
           <Typography variant="body2"sx={{fontSize: "18px",   color: "black",   fontWeight: "500", mt: 1, mb: 2, }} >
            Let's make it personal
            </Typography> 
            <Stack direction="row">
      <List sx={{ width: "100%" ,height:"90%",display:"flex",spacing:'2' }}  rowHeight={90}>
      <ListItem 
       
         >
           
                  
        </ListItem>
      
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
        sx={{
            textTransform: 'none',
         
            marginBottom:'55px',
            

           
            py: 1.2,
            px: 5,
          }}>
   Follow
     </Button>
       </Container>
 
                  
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card 
        //  
          sx={{ maxWidth: "240px", maxHeight:"200",  m: 2.5 }}
          >
            <CardActionArea  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
          
      
        <Avatar 
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 76, height: 76,

       marginTop:"70px" }}
>  

</Avatar>


            <CardContent sx={{ alignItems: 'center'}}>
               
                    <Container 
       sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
       >
           
<Typography  sx={{color:"#1e0a3c", fontWeight:" 700",marginTop:'25px',marginBottom:'5px'}}variant="h5">
The national Archives
</Typography>
 
 </Container>
                    <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
     <Button    variant="outlined"
        sx={{
            textTransform: 'none',
         
            marginBottom:'55px',
            

           
            py: 1.2,
            px: 5,
          }}>
   Follow
     </Button>
       </Container>
 
                  
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card 
        //  
          sx={{ maxWidth: "240px", maxHeight:"200",  m: 2.5 }}
          >
            <CardActionArea  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
          
      
        <Avatar 
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 76, height: 76,

       marginTop:"70px" }}
>  

</Avatar>


            <CardContent sx={{ alignItems: 'center'}}>
               
                    <Container 
       sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
       >
           
<Typography  sx={{color:"#1e0a3c", fontWeight:" 700",marginTop:'25px',marginBottom:'5px'}}variant="h5">
The national Archives
</Typography>
 
 </Container>
                    <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
     <Button    variant="outlined"
        sx={{
            textTransform: 'none',
         
            marginBottom:'55px',
            

           
            py: 1.2,
            px: 5,
          }}>
   Follow
     </Button>
       </Container>
 
                  
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card 
        //  
          sx={{ maxWidth: "240px", maxHeight:"200",  m: 2.5 }}
          >
            <CardActionArea  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
          
      
        <Avatar 
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 76, height: 76,

       marginTop:"70px" }}
>  

</Avatar>


            <CardContent sx={{ alignItems: 'center'}}>
               
                    <Container 
       sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
       >
           
<Typography  sx={{color:"#1e0a3c", fontWeight:" 700",marginTop:'25px',marginBottom:'5px'}}variant="h5">
The national Archives
</Typography>
 
 </Container>
                    <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
     <Button    variant="outlined"
        sx={{
            textTransform: 'none',
         
            marginBottom:'55px',
            

           
            py: 1.2,
            px: 5,
          }}>
   Follow
     </Button>
       </Container>
 
                  
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card 
        //  
          sx={{ maxWidth: "240px", maxHeight:"200",  m: 2.5 }}
          >
            <CardActionArea  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
          
      
        <Avatar 
      alt="Remy Sharp"
      src="/static/images/avatar/1.jpg"
      sx={{ width: 76, height: 76,

       marginTop:"70px" }}
>  

</Avatar>


            <CardContent sx={{ alignItems: 'center'}}>
               
                    <Container 
       sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
       >
           
<Typography  sx={{color:"#1e0a3c", fontWeight:" 700",marginTop:'25px',marginBottom:'5px'}}variant="h5">
The national Archives
</Typography>
 
 </Container>
                    <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
     <Button    variant="outlined"
        sx={{
            textTransform: 'none',
         
            marginBottom:'55px',
            

           
            py: 1.2,
            px: 5,
          }}>
   Follow
     </Button>
       </Container>
 
                  
                
              </CardContent>
            </CardActionArea>
          </Card>
        
    </List>
    </Stack>
            
      <Stack direction="row">
      <List sx={{ width: "100%" ,height:"90%",display:"flex",spacing:'8' }}  rowHeight={90}>
      {itemData.map((item) => (
        <ListItem 
        key={item.img} 
         >
            <Chip sx={{padding:'2px', fontSize:"", height:"44px",borderRadius:"24px",backgroundColor:"#fff"}} 
            label= {item.title} 
             variant="outlined"    /> 
        </ListItem>
      ))}
    </List>
    </Stack>
    </Paper>
    </Container>
    </>
  );
}
export default Findeventfour;