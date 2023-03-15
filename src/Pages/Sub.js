import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { getDatabase, ref, set } from "firebase/database";

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import { Divider, Chip } from '@material-ui/core';
import { createTheme, withStyles, } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import theme from "./Theme"
import { ThemeProvider } from "@material-ui/core";
import { useForm } from 'react-hook-form';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../redux/actions/userActions";
import { useNavigate } from 'react-router-dom';
import {
    fbSignInInitiate,
    googleSignInInitiate,
    loginInitiate,
} from "../redux/actions/userActions";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import { registerInitiate } from "../redux/actions";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


const useStyles = makeStyles((theme) => ({
    root: {
        height: '120vh',
        // width :'100vh'


    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[1000],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    rooot: {
        width: '100%',
        maxWidth: 560,
        backgroundColor: theme.palette.background.paper,
    },
    textfield: {
        margin: theme.spacing(2.1, 0, 2),
    },
    textfield1: {
        margin: theme.spacing(-1, 0, 2),
    },
    paper: {
        margin: theme.spacing(5, 25),
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
        margin: theme.spacing(-1, 0, 2),
        textTransform: 'none',
        fontSize: 14,
    },
    // 
    googlebtn: {
        margin: theme.spacing(2.6, 0, 1),
        textTransform: 'none',
        fontSize: 13,
    },
    icons: {
        margin: theme.spacing(-1.7, 3, 2),
    },
    signup: {
        margin: theme.spacing(5, 0, 5),
    },
    other: {
        margin: theme.spacing(5, 0, 5),
        textTransform: 'none',
    },
    characters: {
        margin: theme.spacing(1.5, 0, 5),

    },
    chip: {
        margin: theme.spacing(2.7, 0, 1),
    },
    divider: {
        margin: theme.spacing(0.2, 0, 1),
        fontSize: "3.25rem",
        lineHeight: "5rem",
        height: "4px",
        // line-height: 1rem;

        // font-size: .75rem;
    }
}));


const Sub = () => {
    const [state, setState] = useState({
        displayName: "",
        lastName: "",
        email: "",
        password: "",

    });
    const { currentUser } = useSelector((state) => state.user);
    console.log("currentUser-------------------------", currentUser)
    let navigate = useNavigate();
    useEffect(() => {

        if (currentUser) {
            navigate("/Login");

           
        }
    });

    const dispatch = useDispatch();
    // const dispatch = useDispatch();
   
    // const { state } = useLocation();

    // const { email} = state;
    const { email, password, displayName, lastName } = state;
   
    const handleformSubmit = (e) => {
        e.preventDefault();
        console.log("")

        if (!email || !email.length) {
            setEmailError("Email address doesn't match. Please try again");

        }
        else {
            setEmailError("");
        }
        if (!password || !password.length) {
            setpasswordError(" Field required");

        }
        else {
            setpasswordError("");
        }
        if (!displayName || !displayName.length) {
            setdisplayNameError(" First name is required");

        }
        else {
            setdisplayNameError("");
        }
        if (!lastName || !lastName.length) {
            setlNameError(" Last name is  required");

        }
        else {
            setlNameError("");
        }
        const db = getDatabase();
        set(ref(db, 'users'), { email: email, displayName: displayName, password: password, lastName: lastName });
        dispatch(registerInitiate(email, displayName, password, lastName));
        setState({ email: "", displayName: "", password: "", lastName: "" });

        return true;

        




    };
    const classes = useStyles();
    //   const {register,handleSubmit}= useForm();

    const [displayNameError, setdisplayNameError] = useState("");
    const [lNameError, setlNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setpasswordError] = useState("");

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
    const handleChange = (e) => {
        let { name, value } = e.target;
        console.log(state, "state")
        setState({ ...state, [name]: value });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />

                     <Grid item 
                    //  xs={12} sm={8} md={6} 
                    sm={12} 
                    md={7} 
                     lg={6}
                     component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
                        <img style={{ width: 140, height: 50 }}
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Eventbrite_logo_2018.png"
                            alt="React Logo" />

                        <Typography component="h1" className={classes.login}
                            variant="h3"
                        >
                            Create  an account
                        </Typography>
                        <form className={classes.form}
                            //   onSubmit={handleSubmit()} 
                            noValidate>
                            <TextField className={classes.textfield}
                                value={state.email}
                                variant="outlined"
                                margin="normal"
                                disabled
                                // required
                                fullWidth
                                id="email"
                                label="Email address"

                                autoComplete="email"
                                autoFocus
                                //   helperText={emailError}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="right">
                                            <EditOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}

                            />
                            {/* <TextField disabled id="standard-disabled" label="Dled" defaultValue="Hello World" /> */}
                            <TextField className={classes.textfield1}

                                error={emailError && emailError.length ? true : false}
                                variant="outlined"
                                margin="normal"
                                //   required
                                type="email"
                                fullWidth
                                id="user-email"
                                name="email"
                                label="Confirm email"
                                value={email}
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                helperText={emailError}

                            />
                            <Grid container spacing={2} >
                                <Grid item xs={12} sm={6} md={6} >
                                    <TextField className={classes.textfield1}
                                        error={displayNameError && displayNameError.length ? true : false}
                                        variant="outlined"
                                        margin="normal"
                                        // required
                                        fullWidth
                                        id="displayName"
                                        label="First Name"
                                        name="displayName"
                                        value={displayName}
                                        onChange={handleChange}

                                        //    autoComplete="email"
                                        autoFocus
                                        helperText={displayNameError}

                                    //    {...register('firstName')}
                                    />



                                </Grid>
                                <Grid item xs={12} sm={6} md={6} >
                                    <TextField className={classes.textfield1}
                                        error={lNameError && lNameError.length ? true : false}
                                        variant="outlined"
                                        margin="normal"
                                        // required
                                        value={lastName}
                                        fullWidth
                                        id="lastName"
                                        label="last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        onChange={handleChange}
                                        autoFocus
                                        helperText={lNameError}
                                    //    {...register('lastName')}
                                    />


                                </Grid>
                            </Grid>
                            <TextField className={classes.textfield1}
                                error={passwordError && passwordError.length ? true : false}
                                variant="outlined"
                                margin="normal"
                                // required
                                fullWidth
                                id="inputPassword"
                                label="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                autoComplete="password"
                                autoFocus
                                helperText={passwordError}
                            //   {...register('password')}
                            />
                            <Divider className={classes.divider} />
                            <Typography component="h1"
                                className={classes.characters}
                                variant="body2"
                            >
                                your password must be at least 8 characters
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                size="large"
                                className={classes.submit}
                                onClick={handleformSubmit}

                            >
                                create account
                            </Button>



                            <Box className={classes.signup} >
                                <Link to="/Login"
                                    variant="h6"
                                >
                                    login
                                </Link>

                            </Box>
                        </form>
                    </div>
                </Grid>
                <Grid item 
                // xs={4} sm={4} md={6}
                xs={false}
                sm={4}
                md={5}
                    className={classes.image}
                />
            </Grid>

        </ThemeProvider>

    );
}
export default Sub;