import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {Box,Stack,Button} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import {  Link } from "react-router-dom";
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index&&(
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  }));
  

 function Tablist() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 10, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="all" {...a11yProps(0)} />
          <Tab label="for you" {...a11yProps(1)} />
          <Tab label="online" {...a11yProps(2)} />
          <Tab label="St Patrick's Day" {...a11yProps(3)} />
          <Tab label="Today" {...a11yProps(4)} />
          <Tab label="This weekend" {...a11yProps(5)} />
          <Tab label="International Woman's Day" {...a11yProps(6)} />
          <Tab label="Womans History Month" {...a11yProps(7)} />
          <Tab label="Free " {...a11yProps(8)} />
          <Tab label="Music " {...a11yProps(9)} />
          <Tab label="Food&Drink" {...a11yProps(10)} />
          <Tab label="Charity&causes" {...a11yProps(11)} />
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Box sx={{ flexGrow: 1 }}>
      <Typography component="h1"sx={{ fontSize: "1.5rem", lineHeight: "2rem",fontWeight:"700",letterSpacing:"0.25px"}}
          variant="h3">
      check out trending categories
          </Typography>
      <Grid container spacing={{ xs: 1, md: -1}} columns={{ xs: 4, sm: 8, md: 16 }}>
      
         <Grid item xs={12} sm={4} md={4} >
                
            <Link  to="/catgeory" style={{ textDecoration: 'none' }}>
            <Stack direction="row"textDecoration= 'none' spacing={0}>
            <Box sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
     
        py: 2.2,
      }}
    >
        < MusicNoteOutlinedIcon sx={{color:"red"}} />
        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
        backgroundColor: '#f8f7fa',
        paddingLeft:'16px'
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textDecoration: 'none'
    
}}
variant="body2"   >
    Music
          </Typography>
        </Box>
      </Stack>
            </Link>
          
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Link  to="/catgeory" style={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,

  
        // border:'1px solid black',
        '&:hover': {
          
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < GppGoodOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
        paddingLeft:"16px",
      
     
        // border:'1px solid black',
        backgroundColor: '#f8f7fa',
        // '&:hover': {
        // //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
  Performing&Arts
          </Typography>

        </Box>
        
       
      </Stack>

            </Link>
         
        

            {/* <Item><GppGoodOutlinedIcon/>Performing&Visual Arts</Item> */}
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Link  to="/catgeory" style={{ textDecoration: 'none' }} >
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < CollectionsOutlinedIcon sx={{color:"red"}} />
        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
       paddingLeft:'16px',
        backgroundColor: '#f8f7fa',
      
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
  Holiday
          </Typography>
        </Box>
      </Stack>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Link  to="/catgeory"style={{ textDecoration: 'none' }} >
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
      }}
    >
        < FavoriteBorderIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
      paddingLeft:'16px',
        backgroundColor: '#f8f7fa',
       
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
  Health
          </Typography>
        </Box>
      </Stack>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Link  to="/catgeory" style={{ textDecoration: 'none' }} >
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
        '&:hover': {
          
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < BusinessCenterOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
        paddingLeft:'16px',
      
        backgroundColor: '#f8f7fa',
      
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
  hobbies
          </Typography>
        </Box>
      </Stack>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Link  to="/catgeory" style={{ textDecoration: 'none' }} >
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < BusinessCenterOutlinedIcon sx={{color:"red"}} />
        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
      paddingLeft:'16px',
        backgroundColor: '#f8f7fa',
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',
    
}}
          variant="body2"    >
  Bussienses
          </Typography>
        </Box>
      </Stack>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Link  to="/catgeory" style={{ textDecoration: 'none' }} >
            <Stack direction="row" spacing={0}>
            <Box
      sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
      }}
    >
        < LocalBarOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
        backgroundColor: '#f8f7fa',
      paddingLeft:'16px'
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textTransform: 'none',}}
          variant="body2"    >Food&Drink</Typography>
        </Box>
      </Stack>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Link  to="/catgeory" style={{ textDecoration: 'none' }}>
            <Stack direction="row" spacing={0}>
            <Box sx={{
        width: 80,
        height: 70,
        backgroundColor: '#fdf7f5',
        textAlign: 'center',
        py: 2.2,
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        < RollerSkatingOutlinedIcon sx={{color:"red"}} />

        </Box>
        <Box
      sx={{
        width: 210,
        height: 70,
        py: 2.2,
      paddingLeft:'16px',
        backgroundColor: '#f8f7fa',
      
      }}
    >
       <Typography component="body2"
       sx={{ alignItems:'center' , my:'4', color:'black',textDecoration: 'none',
    
}}
          variant="body2">
 Sports&Fitness </Typography>
        </Box>
      </Stack>
            </Link>
          </Grid>
      </Grid>
    </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
     
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item four
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item five
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item six
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item seven
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item eight
      </TabPanel>
      <TabPanel value={value} index={11}>
        Item nine
      </TabPanel>
    </Box>
  );
}
export default Tablist;