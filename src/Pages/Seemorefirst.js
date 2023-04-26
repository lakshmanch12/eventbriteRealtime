import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardMedia,CardActionArea,Avatar,Container} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EventIcon from '@mui/icons-material/Event';
import GoogleApiWrapper from './Map';
import { useSelector,useDispatch } from "react-redux";
import {getSeeMorePageInitiate} from '../redux/actions/seemorepageActions';
import { useState ,useEffect } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
const top100Films = [

   
  
  { label: ' Mumbai' },
  { label: '	Delhi' },
  { label: 'Bangalore ' },
  { label: 'Hyderabad '},
  { label: '	Ahmedabad ' },
  { label: 'Chennai' },
  { label: ' Kolkata' },
  { label: 'Surat' },
  { label: 'Visakhapatnam', },
  { label: 'Kanpur'},
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
//   textAlign: 'center'6
  color: theme.palette.text.secondary,
}));
const Seemorefirst = () =>{
  const seemorepagedata = useSelector((state) => state.seemorepagedata.data?.data);
	console.log('seemorepagedata',seemorepagedata);

	const dispatch = useDispatch();

		useEffect(() => {
		// alert("homepage ui");
		dispatch(getSeeMorePageInitiate());
	  }, []);


	  const getData = [];
	  for (let key in seemorepagedata) {
		getData.push({ id: key, ...seemorepagedata[key]});
	}
	console.log('getData',getData);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [open1, setOpen1] = React.useState(true);

    const clickme = () => {
      setOpen1(!open1);
    };
    const text = {
      color: '#39364f',
      fontWeight:"500"
    }
    
  return (
 
      <Grid container spacing={2} sx={{ flexGrow: 1  ,marginTop:9}}>
      <Grid item 
      xs={12} md={3} 
      sx={{ display: { xs: "none", sm: "block" } }}
      >
          <Item>
          <Typography  sx={{color:"#1e0a3c", fontWeight:" 700",paddingLeft:"16px",marginTop:'25px',marginBottom:'25px'}}variant="h4">
             Filters
            </Typography>
            <Divider  />
            <List sx={{ width: '100%', maxWidth: 360,bgcolor: 'background.paper',  position: 'relative', overflow: 'auto',  maxHeight: 600,    '& ul': { padding: 0 }, }}
      subheader={<li />}
    >
          <ListItem sx={{flexDirection:"row" ,marginTop:'20px'}}>
          <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px" }}variant="body2">
          Only show events from organizers I follow
            </Typography>
               
                <Button sx={{backgroundColor:'#eeedf2' ,color:'black',border:'white'}}
                variant="outlined" 
                onClick={handleClickOpen}
                >
        Off 
      </Button>
      <Dialog sx={{alignItems:'center'}} open={open} onClose={handleClose}>
       <Container 
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <DialogContent >
    
<Container 
       sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
       >
             <Avatar 
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 76, height: 76,
//   marginLeft:"140px"
  marginTop:"70px" }}
>  
< EventIcon sx={{color:'black'}}/>
</Avatar>
<Typography  sx={{color:"#1e0a3c", fontWeight:" 700",marginTop:'25px',marginBottom:'5px'}}variant="h5">
Sign in to see events
</Typography>
 <Typography  sx={{color:"#1e0a3c", fontWeight:" 600",paddingLeft:"30px",marginTop:'5px',marginBottom:'5px'}}variant="h5">
 from organizers you follow
</Typography>
 </Container>
 </DialogContent>
 <Container  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
     <Button    variant="contained"
        sx={{
            textTransform: 'none',
            backgroundColor:"red",
            marginBottom:'55px',
            

           
            py: 1.2,
            px: 5,
          }}>
    Get Started
     </Button>
       </Container>
       </Container>
       </Dialog>
       </ListItem>
       
       <ListItem sx={{flexDirection:"row" ,marginTop:'20px'}}>
          <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
          Search for online events
            </Typography>
                <Button sx={{backgroundColor:'#eeedf2' ,color:'black',border:'white' ,marginLeft:'35px'}}
                variant="outlined" 
                onClick={handleClickOpen}
                > Off  </Button>
      </ListItem>
      <Divider variant="middle" sx={{flexDirection:"row" ,marginTop:'20px'}} />
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
      <ListItemButton onClick={clickme}>
      <ListItemText 
                     primary={<Typography variant="h6" style={{ color: '#39364f' }}>Date</Typography>}
                    />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Today</Typography>}
             />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Tomorrow</Typography>}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
      <ListItemButton onClick={clickme}>
      <ListItemText 
                     primary={<Typography variant="h6" style={{ color: '#39364f' }}>Price</Typography>}
                    />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Today</Typography>}
             />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Tomorrow</Typography>}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
      
     
      <Divider variant="middle" sx={{flexDirection:"row" ,marginTop:'20px'}} />
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
      <ListItemButton onClick={clickme}>
      <ListItemText 
                     primary={<Typography variant="h6" style={{ color: '#39364f' }}>Cateory</Typography>}
                    />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Today</Typography>}
             />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Tomorrow</Typography>}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
      <ListItemButton onClick={clickme}>
      <ListItemText 
                     primary={<Typography variant="h6" style={{ color: '#39364f' }}>Format</Typography>}
                    />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Today</Typography>}
             />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Tomorrow</Typography>}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
   
      <Divider variant="middle" sx={{flexDirection:"row" ,marginTop:'20px'}} />
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
      <ListItemButton onClick={clickme}>
      <ListItemText 
                     primary={<Typography variant="h6" style={{ color: '#39364f' }}>Language</Typography>}
                    />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Today</Typography>}
             />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Tomorrow</Typography>}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    
    >
    
      <ListItemButton onClick={clickme}>
      <ListItemText 
                     primary={<Typography variant="h6" style={{ color: '#39364f' }}>Currency</Typography>}
                    />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Today</Typography>}
             />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText  primary={<Typography variant="body2" style={{ color: '#39364f' }}>Tomorrow</Typography>}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
     
    </List>
          </Item>
          <Divider variant="middle" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Item> 
            <Box sx={{ width: '100%', maxWidth: 960, bgcolor: 'background.paper' }}>
      {/* <Box sx={{ my: 3, mx: 2 }}> */}
        <Grid container alignItems="center">
          <Grid item xs>
            
            <Typography gutterBottom variant="h4" component="div">
              search anything
            </Typography>
          </Grid>
          <Grid item>
            
            <Button>
                Search
            </Button>
          </Grid>
        </Grid>
        
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="event loaction" />}
    />
      </Box>
      <Divider variant="middle" />
     
      <Grid item xs={12} md={12}>
      
      {getData.map((itmes,index)=>{	
        return(
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h6" sx={{fontWeight:'800'}}>
              {/* {post.title} */}Indian Designer's Haat "VIZAG" 0.3
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{fontSize: '14px',fontWeight:'800',color:'#d1410c'}}>
              {itmes.date}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            {itmes.address}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
             Free
            </Typography>
          </CardContent>
          <Box sx={{msFlexDirection:'column'}}>
          <CardMedia
            component="img"
            sx={{ width: 260, height:110, display: { xs: 'none', sm: 'block' } }}
            src={itmes.image} 
            alt="Live from space album cover"
            // image={post.image}
            // alt={post.imageLabel}
          />
          <Avatar sx={{marginLeft:'200px',marginTop:'5px'}} >
  <FavoriteBorderIcon />
</Avatar>
</Box>
        </Card>
      </CardActionArea>
        )})} 
      </Grid>  
    
   
   
    </Item>
    <Divider variant="middle" />
    <Divider  sx={{margin:'20px'}} />
       <Container 
       sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
       >
     <Button 
        sx={{
            textTransform: 'none',
            py: 1.2,
            px: 24,
          }}>
     Trending searches in Visakhapatnam, India
     </Button>
       </Container>
        
        </Grid>
        <Grid item xs={7}  md={2} 
         sx={{ display: { xs: "none", sm: "block"} }}>
         
        <GoogleApiWrapper/>
         
        </Grid>
       
      </Grid>
   
  );
}
export default Seemorefirst;
