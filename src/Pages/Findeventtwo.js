import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Stack,
  Grid,
  Button
} from "@mui/material";
// import { database,dbRef } from '../firebase';
import { useState ,useEffect } from "react";
// import {Card,Button} from 'react-bootstrap';
// import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {getHomePageInitiate} from '../redux/actions/homepageActions';
import {homePageApi} from '../redux/api/homepageApi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import {  Link } from "react-router-dom";

const Findeventtwo = () => {
    const homepagedata = useSelector((state) => state.homepagedata.data?.data);
	console.log('homepagedata',homepagedata);

	const dispatch = useDispatch();

		useEffect(() => {
		// alert("homepage ui");
		dispatch(getHomePageInitiate());
	  }, []);


	  const getData = [];
	  for (let key in homepagedata) {
		getData.push({ id: key, ...homepagedata[key]});
	}
	console.log('getData',getData);
  return (
 
    < Box sx={{backgroundColor:"white", marginTop:"80px", margin:"120px"}} >
   
   
             <Box sx={{ my: 5, mx: -1 }}>
        <Grid container alignItems="center">
          <Grid item xs > 
            
            <Typography gutterBottom variant="body2" component="div" sx={{fontSize: "1.5rem",  lineHeight: "2rem",fontWeight:"700",color:'#1e0a3c',marginLeft:"10px"}}>
            Online Events
            </Typography>
          </Grid>
          <Grid item>
            
          <Typography gutterBottom variant="body2" component="div" sx={{fontSize: '14px',fontWeight:"700",color:'#1e0a3c',marginLeft:"10px"}}>
         see more
            </Typography>
          </Grid>
        </Grid>
        
        
      </Box>
             <Stack direction="row">
      <List sx={{ width: "100%" ,height:"90%",display:"flex",spacing:'2' }}  rowHeight={90}>
      
          <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F450123829%2F1061130206503%2F1%2Foriginal.20230220-133001?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=46427f9fbebf14a2628a71ca79f1db77"
      
        title="green iguana"
      
      />
           <CardContent sx={{ height: 240, width: 250 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                The Language of Food - Eliza Acton


                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Thu, Apr 20, 2023 12:00 AM IST
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                    {/* {itmes.address} */}
                    The National Archives on the foot rood, vizag
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                  free
                    {/* {menu.description} */}
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
                    India Youth For Society
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"7px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F129219001%2F197361445633%2F1%2Foriginal.20210316-120602?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=173%2C0%2C2160%2C1080&s=051b4d4b35197024ec4fe41010fe081a"
      
        title="green iguana"
      
      />
            <CardContent sx={{ height: 240, width: 250 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                Career Fair: Exclusive Tech Hiring Event

                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Fri, Apr 21, 2023 9:30 PM IST
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                    {/* {itmes.address} */}
                    Rushikonda Beach • Visakhapatnam, Andhra pradesh, 531036
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                  free
                    {/* {menu.description} */}
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
                    India Youth For Society
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"7px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F464885409%2F37309396322%2F1%2Foriginal.20210406-154154?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C39%2C1920%2C960&s=d7031bdeab42ff12ce01a2f9e705c08c"
      
        title="green iguana"
      
      />
            <CardContent sx={{ height: 240, width: 250 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                Claude Monet's Giverny - A Home and Garden Livestream Tour


                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Sat, Apr 22, 2023 8:30 PM IST
                    {/* {menu.description} */}
                    </Typography>
                   
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                  free
                  
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"0px"}}variant="body2">
                    India Youth For Society
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"0px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F451974089%2F37309396322%2F1%2Foriginal.20221231-053606?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C165%2C750%2C375&s=0f74ee75f2cbd6c2cb12bee89d3b9c79"
      
        title="green iguana"
      
      />
          <CardContent sx={{ height: 240, width: 250 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                Clear Coasts - Beach Cleanup

                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Sun, Apr 9, 6:00 AM + 45 more events
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                    {/* {itmes.address} */}
                    Rushikonda Beach • Visakhapatnam, Andhra pradesh, 531036
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                  free
                    {/* {menu.description} */}
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
                    India Youth For Society
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"7px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
    
    </List>
    </Stack>
    <Stack direction="row">
      <List sx={{ width: "100%" ,height:"90%",display:"flex",spacing:'2' }}  rowHeight={90}>
      <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F396738279%2F166312578381%2F1%2Foriginal.20221120-053822?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=25aee39805cf2015a8de751945f1d1d7"
        title="green iguana"
      
      />
              <CardContent sx={{ height: 240, width: 250 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                Begin your Tai Chi journey: Traditional Movements for Health / Rejuvenation


                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Sun, Apr 23, 2023 8:30 PM IST
                    {/* {menu.description} */}
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
                    Quality of Life Now
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"7px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F443314829%2F303007241545%2F1%2Foriginal.20230210-003309?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=17ec6b3e60a88bab6f1295abb2503a2e"
      
        title="green iguana"
      
      />
             <CardContent sx={{ height: 240, width: 250 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                Black Women in Cybersecurity Initiative



                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Fri, Apr 28, 2023 3:30 AM IST
                    {/* {menu.description} */}
                    </Typography>
                    
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                  free
                    {/* {menu.description} */}
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
                    India Youth For Society
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"7px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F295943659%2F180180503049%2F1%2Foriginal.20220602-114345?w=400&auto=format%2Ccompress&q=75&sharp=10&s=5942cbdb320dd0958f36c4a5bdc85251"
      
        title="green iguana"
      
      />
            <CardContent sx={{ height: 240, width: 250 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                Black Family Business Networking Event


                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Sat, May 6, 2023 4:30 AM IST
                    {/* {menu.description} */}
                    </Typography>
                 
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                  free
                    {/* {menu.description} */}
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
                    Black Family Business with Alicia Beatrice
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"7px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
          <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "300px",  m: 2.5 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 140, width: 280 }}
        // src={itmes.image} 
        src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F451974089%2F37309396322%2F1%2Foriginal.20221231-053606?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C165%2C750%2C375&s=0f74ee75f2cbd6c2cb12bee89d3b9c79"
      
        title="green iguana"
      
      />
              <CardContent   sx={{ height: 240, width: 280 }}>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {/* {itmes.tittle} */}
                Clear Coasts - Beach Cleanup

                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {/* {itmes.date} */}
                    Sun, Apr 9, 6:00 AM + 45 more events
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                    {/* {itmes.address} */}
                    Rushikonda Beach • Visakhapatnam, Andhra pradesh, 531036
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                  free
                    {/* {menu.description} */}
                    </Typography>
                    <Typography  sx={{color:"#39364f", fontWeight:"900",paddingTop:"7px"}}variant="body2">
                    India Youth For Society
                    {/* {menu.description} */}
                    </Typography>
                   
                    <List>
          <ListItem disablePadding>
          
           
                <Person2OutlinedIcon />
             
              <ListItemText  sx={{color:"red", fontWeight:"1200",paddingTop:"7px"}} secondary=" 14 followers" />
           
          </ListItem>
         
        </List>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
    
    </List>
    </Stack>
      </Box>
    
  );
};

export default Findeventtwo;