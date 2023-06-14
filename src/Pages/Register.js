import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import { Divider,Chip } from '@material-ui/core';
import { createTheme, withStyles,   } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from "./Theme"
import {ThemeProvider} from "@material-ui/core";
import {useForm} from 'react-hook-form';
import {  Link } from "react-router-dom";
import  {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../redux/actions/userActions";
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import {
  fbSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from "../redux/actions/userActions";
import Footer from './Footer';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '120vh',
    
    
  },
  image: {
    backgroundImage: 'url(https://cdn.evbstatic.com/s3-build/perm_001/1bab52/django/images/login/lateral-image-1.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[1000],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  },
  rooot: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
  },
  textfield :{
    margin: theme.spacing(2.1, 0, 2),
  },
  textfield1 :{
    margin: theme.spacing(-1, 0, 2),
  },
  paper: {
    margin: theme.spacing(4, 6),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  box: {
    // margin: theme.spacing(1, 25),
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
  },
  login: {
    
    margin: theme.spacing(1),
    fontSize: "3.25rem",
    fontWeight: 'bold',
    fontWeight: "800",
    letterSpacing: "-3px",

  
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(0.7, 0, 2),
    textTransform: 'none',
    fontSize: 14,
  },
// 
  googlebtn :{
    margin: theme.spacing(2.6, 0, 1),
    textTransform: 'none',
    fontSize: 13,
  },
  icons:{
    margin: theme.spacing(-1.7, 3, 2),
  },
  signup:{
    margin: theme.spacing(5, 0, 5), 
  },
  other:{
    margin: theme.spacing(5, 0, 5), 
    textTransform: 'none',
  },
  chip:{
    margin: theme.spacing(2.7, 0, 1), 
    display: 'flex',
  },
  // divider:{
  //   margin: theme.spacing(4.5, 0, 1), 
  //   display: 'flex',
  //   flexDirection: 'row',
  //   width: '60%',
  //   maxWidth: 200,
  // },
  divider:{
    margin: theme.spacing(4.6, 0, 1), 
    display: 'flex',
    flexDirection: 'row',
    width: '45%',
  
  }
}));

const Register = () => {
  // const [state, setState] = useState({
  //   displayName: "",
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  // });
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleGoogleSignIn = () => {
    alert("hello")
    dispatch(googleSignInInitiate());
    navigate("/");
  };
  const handleFBSignIn = () => {
    alert("hello")
    dispatch(fbSignInInitiate());
    navigate("/");
  };

  // const { email} = state;
  const handleformSubmit = (formData) => {
    console.log(formData,"form data is")
    if (!formData.email || !formData.email.length){
      setEmailError("email is required");
     
    }
    else{
      setEmailError("");
      //navigate("/Sub");
      navigate(
        '/sub',
        {
          state: formData
        }
      )
    }
    // navigate("/");
  
    return true;
    
    };
  const classes = useStyles();
  const {register,handleSubmit}= useForm();
  const [emailError,setEmailError]= useState("");
//   const handleFormSubmit = ( formData)=> {
//  console.log ("form data is", formData)
//  if(!formData.error||!formData.error.length){
//     setError("Email is required");
//     // return false;
//  }
//  else{
//     setError("");
//  }
//  return true
//   }

  return ( 
    <>
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid 
      item 
      // xs={12} sm={12} md={6} 
      sm={12} 
      md={7} 
       lg={6}
      component={Paper} 
      // elevation={2}
       square>
        <Container maxWidth="sm">
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img style={{ width: 140, height: 50 }}
           src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Eventbrite_logo_2018.png" 
           alt="React Logo" />
          <Typography component="h1"   className={classes.login}
          variant="h3" >Create  an  </Typography>
          <Typography component="h1"   className={classes.login}
          variant="h3" >account </Typography>
          <form className={classes.form} onSubmit={handleSubmit(handleformSubmit)} noValidate>
            <TextField  className={classes.textfield}
           error={emailError && emailError.length ? true : false}
              variant="outlined"
              margin="normal"
          
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={emailError}
              {...register('email')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              className={classes.submit}
              onClick={handleformSubmit } >
          continue
            </Button>
         <Box   className={classes.box}>
         <Divider  
         className={classes.divider}
         />
      <Chip variant="outlined" className={classes.chip} size="large" label="or" />

      <Divider  
         className={classes.divider}
         />
         </Box>   
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              // color="secondary"
              size="large"
              className={classes.googlebtn}
              onClick={handleGoogleSignIn} >
               <img
               style={{ width: 45, height: 25 }}
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""/>Sign in with gmail
            </Button>
            <Grid container>
              <Grid item xs className={classes.other} >
                <Link   variant="h6" >
                 Other login mehods
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item  className={classes.icons} >
                
                <Avatar alt="Remy Sharp" 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" 
                onClick={handleFBSignIn}/>
              </Grid>
              <Grid item className={classes.icons}>
              </Grid>
            </Grid>
            <Box className={classes.signup} >
            <Link  to="/Login"  variant="h3"
                >
               login
                </Link>
              
            </Box>
          </form>
        </div>
        </Container>
      </Grid>
      <Grid item xs={4} sm={4} md={5} 
      className={classes.image}
       />
    </Grid>
  
   </ThemeProvider>
     <Footer/>
     </>
    
  );
}
export default Register ;