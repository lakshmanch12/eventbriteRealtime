import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import jwt_decode from "jwt-decode";
import * as React from "react";
import { Link } from "react-router-dom";
// import logoImg from "../media/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "../redux/actions/userActions";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  styled
} from "@mui/material";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.black, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(2, 0, 0, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
        display: "block",
      },
    
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));
  
 const Navbar = () => {
    const classes = useStyles();
   
    // let navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    console.log("currentUser--------------", currentUser)
    let user = ""
    
    debugger
    if (currentUser){
      user = jwt_decode(currentUser);
     } else if(localStorage.getItem('email')){
      user = {email: localStorage.getItem('email')}
     }
       console.log(user,"usermmmmm-----------------")
  
    // const tocken= useSelector ( (state)=>state.user.currentUser)
    // console.log(tocken,"tocken-----------------")
    const handleAuth = () => {
      localStorage.clear()
      dispatch(logout());
     
    };

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {["sales", "pricing", "support team",].map(
          (text, index) => ( */}
            <ListItem  disablePadding>
              <ListItemButton>
              <Link to="/sales" style={{ textDecoration: 'none' }}><NavLink variant="body2" >Sales </NavLink></Link>
                {/* <ListItemText primary="sales" /> */}
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
              <Link to="/pricing" style={{ textDecoration: 'none' }}><NavLink variant="body2" >Pricing </NavLink></Link>

              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
              <Link to="/lakshman" style={{ textDecoration: 'none' }}><NavLink variant="body2" >Support  </NavLink></Link>

              </ListItemButton>
            </ListItem>
          {/* ) */}
      
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "13px",
    color: "#4F5361",
    fontWeight: "600",
    cursor: "pointer",
    "&:hover": {
      color: "#39364f",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    padding:"2",
    marginTop:"5",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const BoxRegion = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(),
    [theme.breakpoints.down("md")]: {
      // padding: theme.spacing(),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
    //   display: "none",
    },
  }));

  return (
    < BoxRegion>
   
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5.5rem",
        }}
      >
        <Box sx={{ display: "flex",  }}>
        <CustomMenuIcon  sx={{marginTop:"10px"}} onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          
          <NavbarLogo  style={{ width: 140, height: 50 }}
               src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Eventbrite_logo_2018.png" 

          alt="logo" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search events"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
        </Box>

  
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
        }}
      >

              <NavbarLinksBox>
         
          <Link to="/sales" style={{ textDecoration: 'none' }}><NavLink  variant="body1" noWrap >Sales </NavLink></Link>
          <Link to="/pricing" style={{ textDecoration: 'none' }}><NavLink variant="body2" >Pricing </NavLink></Link>
          <Link to="/lakshman" style={{ textDecoration: 'none' }}><NavLink variant="body2" >Support  </NavLink></Link>
           
         
         
        </NavbarLinksBox>
{ localStorage.getItem('accesstoken') ?<><Link  to="/register" style={{ textDecoration: 'none', color:"red" }}><NavLink  style={{color:"red" }}variant="body2" >
        { user.email }
          
           {/* {email.split('@')[0]} */}
            </NavLink></Link>
        <Link  style={{ textDecoration: 'none', color:"red" }}><NavLink  style={{color:"red" }}variant="body2" onClick={handleAuth} >
         logout </NavLink></Link> </> 
         :<>

         <Link to="/register" style={{ textDecoration: 'none', color:"red" }}><NavLink  style={{color:"red" }}variant="body2"  >
         sign in </NavLink></Link>
         <Link   to="/login" style={{ textDecoration: 'none', color:"red" }}><NavLink  style={{color:"red" }}variant="body2"  >
         login </NavLink></Link>
         </>
         }


    
       
      </Box>
    {/* </NavbarContainer> */}
    </BoxRegion>
  );
};

export default Navbar;