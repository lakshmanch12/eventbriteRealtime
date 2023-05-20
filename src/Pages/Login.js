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
import {  Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../redux/actions/userActions";
import { useNavigate } from 'react-router-dom';
import  {  useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { auth, } from "../firebase";
import "../index.css"


import {
  loginStart,
  loginSuccess,
  loginError,
  fbSignInInitiate,
  googleSignInInitiate,

} from "../redux/actions/userActions";
import {useForm} from 'react-hook-form';




const useStyles = makeStyles((theme) => ({
 
  root: {
    height: '100vh',
    
    
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[1000],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
 
  textfield :{
    margin: theme.spacing(6, 0, 2),
  },
  textfield1 :{
    margin: theme.spacing(-1, 0, 2),
  },
  paper: {
    margin: theme.spacing(1, 25),
    display: 'flex',
    flexDirection: 'column',
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(-0.1, 0, 2),
    textTransform: 'none',
    fontSize: 14,
  },
  btngoggle :{
    margin: theme.spacing(2, 0, 2),
    textTransform: 'none',
    fontSize: 13,
  },
  googlebtn :{
    margin: theme.spacing(-0.6, 0, 1),
    textTransform: 'none',
    fontSize: 13,
  },
  icons:{
    margin: theme.spacing(1, 1, 2),
  },
  signup:{
    margin: theme.spacing(5, 0, 5), 
  },
  other:{
    margin: theme.spacing(5, 0, 5), 
  },
  box: {
    // margin: theme.spacing(1, 25),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip:{
    margin: theme.spacing(2.7, 0, 1), 
  },
  divider:{
    margin: theme.spacing(3.6, 0, 1), 
    display: 'flex',
    flexDirection: 'row',
    width: '45%',
    // maxWidth: 163,
  }
}));

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.user);

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (currentUser) {
  //     navigate("/");
  //   }
  // });

 
console.log(currentUser,"currentUser////////////////////////")






  // const {register,handleSubmit}= useForm();

  const [emailError,setEmailError]= useState("");
  const [passwordError,setPaswordError]= useState("");

  const classes = useStyles();

  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  
  
  const handleGoogleSignIn = () => {
    alert("hello")
    dispatch(googleSignInInitiate());
   
  };


  const handleSubmit = async e => {
    e.preventDefault();
    try{ 
      let res= await  signInWithEmailAndPassword(auth,email, password)
      console.log(res.user.accessToken, "reskjdflvkdk")

      localStorage.setItem("accesstoken",  res.user.accessToken)
      localStorage.setItem("email",  res.user.email)
      let mydate=new Date()
      localStorage.setItem("expritiontime",mydate.setHours(mydate.getHours()+24));
      dispatch(loginSuccess(res.user.accessToken));
      navigate("/");
    }
    catch(error){
      console.log(error, "hdkjhvhjdv")

    }
  };
    // if (!email || !email.length){
    //   setEmailError("email is required");
     
    // }
    // else{
    //   setEmailError("");
    // }
    // if (!password || !password.length){
    
    //   setPaswordError("password should be 6 characters");
      
  
    // }
    // else{
    //   setPaswordError("");
    // }
  //   if (!email || !password) {
    
  //     return;
  //   }
  //   dispatch(loginStart());
  //   signInWithEmailAndPassword(auth,email, password)
  //   .then(async (res) => {
  //     console.log(res.user.email,"res");  
  //     const user = res.user;
  //     const userId = user.uid
  //     user.isLogin = true
  //     dispatch(loginSuccess(user));
  //      console.log(user,"//////////////////////////////////")
  //     if(userId!==null){
         
  //     navigate("/",{state:{isLogin:true}});
  //     }
  // })
  // .catch((error) => dispatch(loginError(error.message)))
  //   setState({ email: "", password: "" });
   
 

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
    
      <Grid item 
      // xs={12} 
      sm={12} 
      md={12} 
       lg={6}
      sx={{ width: matches === false ? '50vw' : '90vw' }}
      component={Paper} 
      elevation={6} 
       square>
        <div 
        className={classes.paper}
        >
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img style={{ width: 140, height: 50 }}
           src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Eventbrite_logo_2018.png" 
           alt="React Logo" />

          <Typography component="h1"   className={classes.login}
          variant="h3" 
          >
           Log in
          </Typography>
          <form className={classes.form} 
          // onSubmit={handleSubmit(handleformSubmit)} 
          noValidate>
            <TextField 
              className={classes.textfield}
            error={emailError && emailError.length ? true : false}
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              id="inputEmail"
              name="email"
            onChange={handleChange}
            value={email}
              label="Email Address"
             helperText={emailError}
              autoComplete="email"
              autoFocus
             
            />
            <TextField 
            className={classes.textfield1}
            textTransform= 'none'
            error={passwordError && passwordError.length ? true : false}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              // {...register('password')}
              name="password"
              label="Password"
              type="password"
              id="inputPassword"
            
              onChange={handleChange}
              value={password}
              helperText={passwordError}
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
              className={classes.submit}
              onClick={handleSubmit }
            >
          Log in
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
              size="large"
              // color="secondary"
              className={classes.btngoggle}
            >
              Email me a login link
              
            </Button>

  
            

           

                
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              // color="secondary"
              size="large"
              className={classes.googlebtn}
              onClick={handleGoogleSignIn}
            >
               <img
               style={{ width: 45, height: 20 }}
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
               Sign in with gmail
            </Button>
            <Grid container>
              <Grid item xs className={classes.other} >
                <Link  
                variant="h6"
                >
                 Other login mehods
                </Link>
              </Grid>
           
            </Grid>
            <Grid container>
              <Grid item  className={classes.icons} >
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
                <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" />
              </Grid>
              <Grid item className={classes.icons}>
              <Avatar alt="Remy Sharp" src="https://1000logos.net/wp-content/uploads/2016/10/apple-emblem.jpg" />

                {/* <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link> */}
              </Grid>
            </Grid>
            <Box className={classes.signup} >
            <Link  to="/Register" 
                variant="h6"
                >
                signup
                </Link>
                 {/* <Link to="/Register"> <button 
              >Login</button></Link> */}
              
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={4} sm={4} md={6} 
      className={classes.image}
       />
    </Grid>
  
   </ThemeProvider>
    
  );
}

export default Login ;