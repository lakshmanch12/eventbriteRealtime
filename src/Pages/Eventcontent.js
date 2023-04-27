import React from 'react';
import {Container,Typography,Grid,Box,Button,Stack,Divider,Chip,CardMedia,Avatar,CardContent,Card,CardActionArea} from '@mui/material';
import { styled } from '@mui/material/styles';
import Eventcontentbox from './Eventcontentbox';
import Paper from '@mui/material/Paper';
import EventIcon from '@mui/icons-material/Event';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

import { red } from '@mui/material/colors';

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FileUploadTwoToneIcon from '@mui/icons-material/FileUploadTwoTone';
import List from '@mui/material/ImageList';
import ListItem from '@mui/material/ImageListItem';
import { Icon } from '@iconify/react';
import { useTheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Eventcontentpost from './Eventcontentpost';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));

const Eventcontent = () => {
  const theme = useTheme();
  return (
    <div><Container>
    <Box sx={{ flexGrow: 1 ,marginTop:"20px"}}>
<Grid container spacing={2}>
<Grid item xs={7.5}>
  <Item>
  <Typography component="h2" variant="h6" sx={{fontWeight:'800',color:"#1e0a3c"}}>
  Apr 4
    </Typography>
    <Typography variant="h3" sx={{fontWeight:'800',fontSize: "3.25rem",lineHeight: "4rem",color:"#1e0a3c"}}>
    Indian Designer's Haat "VIZAG" 0.3
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" sx={{fontSize: '14px',fontWeight:'800',color:'#1e0a3c'}}>
    Exhibition is an event that offers you a chance to explore the world of fashion and lifestyle.
    </Typography>

    <Box sx={{ my: 5, mx: -1 , backgroundColor:"#eeedf2"}}>
        <Grid container alignItems="center">
          <Grid item xs > 
            
            <Typography gutterBottom variant="body2" component="div" sx={{fontSize: '14px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px"}}>
            By fayre media
            </Typography>
          </Grid>
          <Grid item>
            
          <Button variant="contained" sx={{marginTop:"20px",marginBottom:"20px",marginRight:"10px"}}>Follow</Button>
          </Grid>
        </Grid>
        
        
      </Box>
      
    <Box sx={{ my: 5, mx: -1 }}>
    <Typography  variant="h2" component="div" sx={{fontSize: '25px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px"}}>
    When and where
            </Typography>
        <Grid container alignItems="center" >
        <Grid item xs={2} sm={4} md={4} >
                
               
                <Stack direction="row"textDecoration= 'none' spacing={0}>
            
         
            <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          // border: (theme) => `1px solid ${theme.palette.divider}`,
         
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <Box sx={{
            width: 70,
            height: 40,
            backgroundColor: '#eeedf2',
            textAlign: 'center',
         marginLeft:"10px",
         borderRadius: 4,
            py: 2.2,
          }}
        >
            < EventIcon sx={{color:"blue"}} />
            </Box>
        <Box
          sx={{
            width: 210,
            height: 70,
            // py: 4.2,
           
            paddingLeft:'16px'
          
          }}
        >
           <Typography component="body2"
           sx={{ alignItems:'center' , my:'4', color:'black',textDecoration: 'none' }}
    variant="body2"   >
      Date and time
              </Typography>
              <Typography component="body2"
           sx={{ alignItems:'center' , my:'4', color:'black',textDecoration: 'none' }}
    variant="body2"   >
   April 4 · 11am - April 5 · 8pm IST
              </Typography>
              
      
    
            </Box>
       
        <Divider orientation="vertical" flexItem />
        <Box sx={{
            width: 70,
            height: 40,
            backgroundColor: '#eeedf2',
            textAlign: 'center',
            marginLeft:"10px",
            borderRadius: 4,
         
            py: 2.2,
          }}
        >
            < PlaceOutlinedIcon sx={{color:"blue"}} />
            </Box>
        <Box
          sx={{
            width: 210,
            height: 70,
            py: 2.2,
            // backgroundColor: '#f8f7fa',
            paddingLeft:'16px'
          
          }}
        >
           <Typography component="body2"
           sx={{ alignItems:'center' , my:'4', color:'black',textDecoration: 'none' }}
    variant="body2"   >
     Loaction
              </Typography>
              <Typography component="body2"
           sx={{ alignItems:'center' , my:'4', color:'black',textDecoration: 'none' }}
    variant="body2"   >
   Novotel Visakhapatnam Varun Beach Doctor NTR Beach Road Visakhapatnam, AP 530002
              </Typography>
              
      
    
            </Box>
      </Box>
            
           
          </Stack>


        
              </Grid>
          <Grid item>
          </Grid>
        </Grid>
        
        
      </Box>
      <Box >
    <Typography  variant="h2" component="div" sx={{fontSize: '25px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px"}}>
    About this event
            </Typography>
        <Grid container alignItems="center" >
        <Grid item xs={2} sm={4} md={12} >
                
               
                <Stack direction="row"textDecoration= 'none' spacing={0}>
            
                <Typography  variant="body2" component="div" sx={{fontSize: '15px',fontWeight:'400',color:'#6f7287',marginLeft:"10px" ,marginTop:"10px"}}>
                India's most prestigious fashion and lifestyle exhibition.we bring the latest trend as well as traditional fshion under one roof of our exhibition 'Indian Designer's Haat'.one will get all fashion needs from resplendent jewellery to superfect dresses, from stylish stilettos to magnificent clutches.with every edition of our exhibition we unveil a fashion fayretale.
            </Typography>
          
            
           
          </Stack>


          
            <Stack direction="row"textDecoration= 'none' spacing={0}>
          </Stack>
              </Grid>
          <Grid item>
          </Grid>
        </Grid>
        
        
      </Box>
      <Box >
    <Typography  variant="h2" component="div" 
    sx={{fontSize: '25px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px",marginTop:"60px"}}>
   Tags
            </Typography>
        <Grid container alignItems="center" >
        <Grid item xs={2} sm={4} md={12} >
                
               
     
 
    <Stack spacing={2} sx={{marginTop:"20px"}}
     >
      <Stack direction="row" spacing={2}>
      <Chip label="india events" />
      <Chip label="Andhrapradesh events" />
      <Chip label=" thing to do in vijayawada" />
      <Chip label="  vijayawada expos" />
      </Stack>
      <Stack direction="row" spacing={2}>
      <Chip label="  vijayawada fashin expos" />
      <Chip label="   #events" />
      <Chip label="   #exhibition" />
      <Chip label="   #Events_near_me" />
      <Chip label="   #exhibition_opening" />
      </Stack>
      <Stack direction="row" spacing={2}>
      <Chip label="   #exhibition_event" />
      <Chip label="   #exhibition_2023" />
      <Chip label="   #indiandesigenshaat" />
      <Chip label="   #idexhabtion" />
      <Chip label="   #upcomingexhibition" />
      </Stack>
    </Stack>


          
            <Stack direction="row"textDecoration= 'none' spacing={0}>
          </Stack>
              </Grid>
          <Grid item>
          </Grid>
        </Grid>
        
        
      </Box>
      <Box >
     
    
        <Grid container alignItems="center" sx={{marginTop:"30px"}}>
        <Typography  variant="h2" component="div" sx={{fontSize: '25px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px" }}>
    Share with friends
            </Typography>
        <Grid item xs={2} sm={4} md={12} >
                
               
        <Stack direction="row" spacing={2} sx={{marginTop:"10px",marginLeft:"10px"}}>
         

  
        <Icon icon="gg:facebook" width="25" height="25" />
        <Icon icon="fe:messanger" width="25" height="25"  />
        <Icon icon="basil:linkedin-solid"width="25" height="25"  />
        <Icon icon="mdi:twitter" width="25" height="25"  />
        <Icon icon="ic:twotone-email" width="25" height="25"  />
 
     
    </Stack>


        
              </Grid>
              
              <Grid item xs={12} md={12}sx={{marginTop:"40px", alignItems:"center"}}>
              <Typography  variant="h2" component="div" sx={{fontSize: '25px',
                fontWeight:'800',
                color:'#1e0a3c',
                // marginLeft:"10px"
                justifyContent:"center"
                 }}>
        About the organizer
            </Typography>
                <Paper  elevation={5} sx={{alignItems:"center"}}>
                  <Container 
                      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             
            <Typography  sx={{color:"#1e0a3c", fontWeight:" 300",marginTop:'25px',marginBottom:'5px'}}variant="body2">
            Organized by
</Typography>
 <Typography  sx={{color:"#1e0a3c", fontWeight:" 300",paddingLeft:"30px",marginTop:'5px',marginBottom:'5px'}}variant="body2">
 from organizers you follow
</Typography>
<Stack direction="row" spacing={2}
//  sx={{marginLeft:"120px" ,marginTop:"5px"}}
 >
{/* <Button variant="contained" sx={{marginTop:"20px",marginBottom:"20px",marginRight:"10px"}}>Follow</Button> */}

   
<Button variant="contained" sx={{marginTop:"20px",marginBottom:"20px",marginRight:"10px"}}>Follow</Button>

    
    </Stack>
            </Container>
                </Paper>
              
   
     
     
        <Card sx={{ display: 'flex' }}>
          
          <Box sx={{msFlexDirection:'column'}}>
        
         



</Box>
        </Card>

      </Grid>
        </Grid>
      
        <Grid item xs={12} md={12}sx={{marginTop:"40px"}}>
        <Typography  variant="h2" component="div" sx={{fontSize: '25px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px" }}>
        More events from this organizer
            </Typography>
      
      <CardActionArea component="a" href="#"sx={{marginTop:"20px"}}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h6" sx={{fontWeight:'800'}}>
              {/* {post.title} */}Indian Designer's Haat "VIZAG" 0.3
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{fontSize: '14px',fontWeight:'800',color:'#d1410c'}}>
              {/* {itmes.date} */}Indian Designer's Haat "Vijaywada"
Thu, Apr 6, 11:00 AM

            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            {/* {itmes.address} */}Thu, Apr 6, 11:00 AM
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            a Convention Centre • Vijayawada, AP
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
             Free
            </Typography>
          </CardContent>
          <Box sx={{msFlexDirection:'column'}}>
          <CardMedia
            component="img"
            sx={{ width: 260, height:110, display: { xs: 'none', sm: 'block' } }}
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456707759%2F1057323484683%2F1%2Foriginal.20230228-074940?w=400&auto=format%2Ccompress&q=75&sharp=10&s=2cba30eae323c4d280c836dcfdaaa8c4" 
            alt="Live from space album cover"
            // image={post.image}
            // alt={post.imageLabel}
          />
          {/* <Avatar sx={{marginLeft:'200px',marginTop:'5px'}} >
  <FavoriteIcon />
</Avatar> */}
<Stack direction="row" spacing={2} sx={{marginLeft:"140px" ,marginTop:"5px"}}>
    <Avatar sx={{backgroundColor:"#f2f3f5"}} >
  <FileUploadTwoToneIcon sx={{color:"black"}}  />
</Avatar>
<Avatar >
  <FavoriteTwoToneIcon sx={{color:"black"}} />
</Avatar>
    
    </Stack>


</Box>
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#"sx={{marginTop:"20px"}}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h6" sx={{fontWeight:'800'}}>
              {/* {post.title} */}Indian Designer's Haat "VIZAG" 0.3
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{fontSize: '14px',fontWeight:'800',color:'#d1410c'}}>
              {/* {itmes.date} */}Indian Designer's Haat "Vijaywada"
Thu, Apr 6, 11:00 AM

            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            {/* {itmes.address} */}Thu, Apr 6, 11:00 AM
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            a Convention Centre • Vijayawada, AP
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
             Free
            </Typography>
          </CardContent>
          <Box sx={{msFlexDirection:'column'}}>
          <CardMedia
            component="img"
            sx={{ width: 260, height:110, display: { xs: 'none', sm: 'block' } }}
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456707759%2F1057323484683%2F1%2Foriginal.20230228-074940?w=400&auto=format%2Ccompress&q=75&sharp=10&s=2cba30eae323c4d280c836dcfdaaa8c4" 
            alt="Live from space album cover"
            // image={post.image}
            // alt={post.imageLabel}
          />
          {/* <Avatar sx={{marginLeft:'200px',marginTop:'5px'}} >
  <FavoriteIcon />
</Avatar> */}
<Stack direction="row" spacing={2} sx={{marginLeft:"140px" ,marginTop:"5px"}}>
    <Avatar sx={{backgroundColor:"#f2f3f5"}} >
  <FileUploadTwoToneIcon sx={{color:"black"}}  />
</Avatar>
<Avatar >
  <FavoriteTwoToneIcon sx={{color:"black"}} />
</Avatar>
    
    </Stack>


</Box>
        </Card>
      </CardActionArea>
      <CardActionArea component="a" href="#"sx={{marginTop:"20px"}}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h6" sx={{fontWeight:'800'}}>
              {/* {post.title} */}Indian Designer's Haat "VIZAG" 0.3
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{fontSize: '14px',fontWeight:'800',color:'#d1410c'}}>
              {/* {itmes.date} */}Indian Designer's Haat "Vijaywada"
Thu, Apr 6, 11:00 AM

            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            {/* {itmes.address} */}Thu, Apr 6, 11:00 AM
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            a Convention Centre • Vijayawada, AP
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
             Free
            </Typography>
          </CardContent>
          <Box sx={{msFlexDirection:'column'}}>
          <CardMedia
            component="img"
            sx={{ width: 260, height:110, display: { xs: 'none', sm: 'block' } }}
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456707759%2F1057323484683%2F1%2Foriginal.20230228-074940?w=400&auto=format%2Ccompress&q=75&sharp=10&s=2cba30eae323c4d280c836dcfdaaa8c4" 
            alt="Live from space album cover"
            // image={post.image}
            // alt={post.imageLabel}
          />
          {/* <Avatar sx={{marginLeft:'200px',marginTop:'5px'}} >
  <FavoriteIcon />
</Avatar> */}
<Stack direction="row" spacing={2} sx={{marginLeft:"140px" ,marginTop:"5px"}}>
    <Avatar sx={{backgroundColor:"#f2f3f5"}} >
  <FileUploadTwoToneIcon sx={{color:"black"}}  />
</Avatar>
<Avatar >
  <FavoriteTwoToneIcon sx={{color:"black"}} />
</Avatar>
    
    </Stack>


</Box>
        </Card>
      </CardActionArea>
      </Grid>
        
        
      </Box>


  </Item>
  
</Grid>
<Grid item xs={4}>
  <Item sx={{p:3}} >
  <Box  sx={{ p: 1, alignItems:"center",  borderRadius: 3, border: '2px solid blue' }}>
  <Grid container alignItems="center">
          <Grid item xs > 
          
            <Typography  variant="h6" component="div" sx={{fontSize: '18px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px"}}>
            General Admission
            </Typography>
            
          </Grid>
          <Grid item>
            
          <Button variant="contained" sx={{marginTop:"20px",marginBottom:"20px",marginRight:"10px"}}>Follow</Button>
          </Grid>
        </Grid>
        <Typography  variant="h6" component="div" sx={{fontSize: '14px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px"}}>
          free
            </Typography>
            


     
    </Box>
    <Button
        sx={{
          marginTop:"8px",
         justifyContent:"center",
          borderRadius: 2,
        
          textTransform: 'none',
          color:'White',
          backgroundColor:"red",
          display: 'flex',

          py: 0.8,
          px: 16.5,
        }}
      >
    
         Resereve 
        
      </Button>
    
  </Item>
</Grid>


</Grid>
</Box>

    </Container>
    <Eventcontentpost/>
    
    



    </div>
  )
}

export default Eventcontent