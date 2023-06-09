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
import Demo from "./Demo"
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FileUploadTwoToneIcon from '@mui/icons-material/FileUploadTwoTone';
import List from '@mui/material/ImageList';
// import ListItem from '@mui/material/ImageListItem';
import { Icon } from '@iconify/react';
import { useTheme } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';

import IconButton from '@mui/material/IconButton';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Eventcontentpost from './Eventcontentpost';
const featuredPosts = [
  {
    title: "Indian Designer's Haat VIZAG0. 3",
    date: "  Indian Designer's Haat Vijaywada Thu, Apr 6, 11:00 AM'" ,
  
    description:  'A convention center at vijyawada ap 531038.',
    image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456707759%2F1057323484683%2F1%2Foriginal.20230228-074940?w=400&auto=format%2Ccompress&q=75&sharp=10&s=2cba30eae323c4d280c836dcfdaaa8c4',

    imageLabel: 'Image Text',
  },
  {
    title: "most  popular 's Haat reno. ",
    date: "  mexico Designer's Haat near sony Thu, Apr 6, 12:00 AM'" ,
    description:
      'A convention center at vijyawada ap 531038.',
    image: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?cs=srgb&dl=pexels-godisable-jacob-949670.jpg&fm=jpg',
    imageLabel: 'Image Text',
  },
  {
    title: "Indian Designer's Haat VIZAG0. 3",
    date: "  chineesi Designer's Haat guntur Thu, Apr 6, 11:00 AM'" ,
    description:
      'A convention center at vijyawada ap 531038.',
      image: 'https://cdn0.desidime.com/topics/photos/1301090/original/03062021-m-unisex-topbanner-giantfashionsale-50to80.jpg?1622692676',

    imageLabel: 'Image Text',
  },
  {
    title: "Indian Designer's Haat VIZAG0. 3",
    date: "  Indian Designer's Haat Vijaywada Thu, Apr 6, 11:00 AM'" ,
    description:
      'A convention center at vijyawada ap 531038.',
    image: 'https://assets-static.invideo.io/images/origin/Creative_Fashion_Digital_Marketing_Ideas_To_Boost_Sales_2_0d0bbb116f.png',
    imageLabel: 'Image Text',
  },
];
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
  
 
  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  

const Eventcontent = () => {
  const theme = useTheme();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'india events' },
    { key: 1, label: 'andhrapradesh events' },
    { key: 2, label: 'things to do in vizag' },
    { key: 3, label: ' vijayawada expos' },
    { key: 4, label: 'vijayawada fashin expos' },
    { key: 2, label: '#events' },
    { key: 3, label: ' #exhibition' },
    { key: 4, label: '#Events_near_me' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: '#exhibition_opening' },
    { key: 4, label: '#exhibition_event' },
    { key: 2, label: ' #exhibition_2023' },
    { key: 3, label: ' #indiandesigenshaat' },
    { key: 4, label: ' #idexhabtion' }, 
    { key: 3, label: '#upcomingexhibition' },
  ]);
  return (
    <div>
      <Container>
    <Box sx={{ flexGrow: 1 ,marginTop:"20px"}}>
<Grid container spacing={2}>
<Grid item xs={12} md={8} sm={12}>
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
      <Box >
    <Typography  variant="h2" component="div" sx={{fontSize: '25px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px"}}>
    About this event
            </Typography>
        <Grid container alignItems="center" >
        <Grid item xs={12} sm={12} md={12} >
                
               
                <Stack direction="row"textDecoration= 'none' spacing={0}>
            
                <Typography  variant="body2" component="div" sx={{fontSize: '15px',fontWeight:'400',color:'#6f7287',marginLeft:"10px" ,marginTop:"10px"}}>
                India's most prestigious fashion and lifestyle exhibition.we bring the latest trend as well as traditional fshion under one roof of our exhibition 'Indian Designer's Haat'.one will get all fashion needs from resplendent jewellery to superfect dresses, from stylish stilettos to magnificent clutches.with every edition of our exhibition we unveil a fashion fayretale.
            </Typography>
          
            
           
          </Stack>


          
            <Stack direction="row"textDecoration= 'none' spacing={0}>
          </Stack>
              </Grid>

          <Grid item xs={12} sm={12} md={12}>
         
          </Grid>
        </Grid>
        
        
      </Box>
      <Box >
      <Typography  variant="h2" component="div" 
    sx={{fontSize: '25px',fontWeight:'800',color:'#1e0a3c',marginLeft:"10px",marginTop:"60px"}}>
   Tags
            </Typography>
      <Box
      sx={{
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
            
            />
          </ListItem>
        );
      })}
    </Box>
    
       
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
 >
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
            <Grid container spacing={5}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
      </Grid>
      </Box>
  </Item>
</Grid>
<Grid item xs={12} md={4} sm={6}  
sx={{ display: { xs: "none", sm: "block", md:"block"}}}
>
  <Item sx={{p:3, alignItems:"center", justifyContent:"center",}} >
  <Box  sx={{ p: 1, alignItems:"center",  flexGrow: 1 ,  borderRadius: 3, border: '2px solid blue' }}>
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
    {/* <Button
    sx={{ p: 1,   marginTop:"8px", display: 'flex', alignItems:"center",  backgroundColor:"red", justifyContent:"center",flexGrow: 1 ,px: 16.5,py: 0.8,  borderRadius: 3, }}
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
        
      </Button> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2}}>
      <Button
        sx={{
        
          display:'flex',
          borderRadius: 3,
          backgroundColor:"red",
          height: '200',
          textTransform: 'none',
          color:'black',
          py: 1.2,
          px: 12,
        }}
      >
          Resereve 
      </Button>
      </Box>
     
    
  </Item>

</Grid>
</Grid>
</Box>

    </Container>
    {/* <Eventcontentpost/> */}
    </div>
  )
}

export default Eventcontent