import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
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

const Post = () => {
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
    // <Layout>
    <>
    <Typography variant="h1"  sx={{ fontSize: "1.5rem", lineHeight: "2rem",fontWeight:"700",letterSpacing:"0.25px",m: 2}}>
    Events in Vishākhapatnam
             {/* {menu.description} */}
             </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
         
      {getData.map((itmes,index)=>{	
					// console.log("catdata",itmes);
					return(
            <Link  to="/event"  style={{ textDecoration: 'none' }}  >
          <Card 
          sx={{ maxWidth: "270px",  m: 2 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 200, width: 280 }}
        src={itmes.image} 
      
        title="green iguana"
      
      />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography sx={{fontWeight:"700"}}variant="h5">
                {itmes.tittle}
                    </Typography>
                    <Typography  sx={{color:"red",fontWeight:"600",paddingTop:"7px"}}variant="body2">
                    {itmes.date}
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2" sx={{fontWeight:"100",paddingTop:"7px"}}>
                    {itmes.address}
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
    )
                  
})}
      </Box>
      </>
    // </Layout>
  );
};

export default Post;