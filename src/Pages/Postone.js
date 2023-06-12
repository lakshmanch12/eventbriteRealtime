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
import {getFindEventPageInitiate} from '../redux/actions/findeventActions';
// import {homePageApi} from '../redux/api/homepageApi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import {  Link } from "react-router-dom";

const Postone = () => {
    const findeventpagedata = useSelector((state) => state.findeventpagedata.data);
	console.log('findeventpagedata',findeventpagedata);

	const dispatch = useDispatch();

		useEffect(() => {
		// alert("homepage ui");
		dispatch(getFindEventPageInitiate());
	  }, []);


	  const getData = [];
	  for (let key in findeventpagedata) {
		getData.push({ id: key, ...findeventpagedata[key]});
	}
	console.log('getData12356346',getData);
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
          sx={{ maxWidth: "280px",maxHeight: "450px",  m: 1 }}
          >
            <CardActionArea>
          
       <CardMedia
         component="img"
        sx={{ height: 170, width: 280 }}
        src={itmes.image} 
        // src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F396738279%2F166312578381%2F1%2Foriginal.20221120-053822?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=25aee39805cf2015a8de751945f1d1d7"
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

export default Postone;