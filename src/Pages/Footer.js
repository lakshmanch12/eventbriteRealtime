import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Icon } from '@iconify/react';

// import fbIcon from "../media/fbicon.png";
// import twitterIcon from "../media/twittericon.png";
// import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "13px",
    color: "white",
    fontWeight: "200",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  }));

  return (
    <Box sx={{ py: 10,backgroundColor: "#1e0a3c" }}>
    
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Use Eventbrite
            </Typography>

            <FooterLink>Create Events</FooterLink>
            <br />
            <FooterLink>Pricing</FooterLink>
            <br />
            <FooterLink>Eventbrite Boost</FooterLink>
            <br />
            <FooterLink>Eventbrite Mobile Ticket App</FooterLink>
            <br />
            <FooterLink>Eventbrite Check-In App</FooterLink>
            <br />
            <FooterLink>Eventbrite App Marketplace</FooterLink>
            <br />
            <FooterLink>Event Registration Software</FooterLink>
            <br />
            <FooterLink>Content Standards</FooterLink>
            <br />
            <FooterLink>FAQs</FooterLink>
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
             Plan Events
            </Typography>

            <FooterLink>Sell Tickets Online</FooterLink>
            <br />
            <FooterLink>Event Planning</FooterLink>
            <br />
            <FooterLink>Sell Concert Tickets Online</FooterLink>
            <br />
            <FooterLink>Event Payment System</FooterLink>
            <br />
            <FooterLink>Solutions for Professional Services</FooterLink>
            <br />
            <FooterLink>Event Management Software </FooterLink>
            <br />
            <FooterLink>Community Engagement </FooterLink>
            <br />
            <FooterLink>Virtual Events Platform </FooterLink>
            <br />
            <FooterLink>QR Codes for Event Check-In </FooterLink>
            <br />
            <FooterLink>Post your event online</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
            Find Events
            </Typography>

            <FooterLink>New Orleans Food & Drink Events</FooterLink>
            <br />
            <FooterLink>San Francisco Holiday Events</FooterLink>
            <br />
            <FooterLink>Tulum Music Events</FooterLink>
            <br />
            <FooterLink>Denver Hobby Events</FooterLink>
            <br />
            <FooterLink>Atlanta Pop Music Events</FooterLink>
            <br />
            <FooterLink>New York Events</FooterLink>
            <br />
            <FooterLink> Chicago Events</FooterLink>
            <br />
            <FooterLink>Events in Dallas Today</FooterLink>
            <br />
            <FooterLink>Los Angeles Events</FooterLink>
            <br />
            <FooterLink>Washington Events</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "white",
                fontWeight: "700",
                mb: 2,
              }}
            >
             Connect With Us
            </Typography>
            <FooterLink>Contact Support</FooterLink>
            <br />
            <FooterLink> Twitter  </FooterLink>
            <br />
            <FooterLink> Facebook </FooterLink>
            <br />
            <FooterLink>LinkedIn  </FooterLink>
            <br />
            <FooterLink>Instagram   </FooterLink>
            <br />
           
            

           
            

            <IconBox >
              <Icon icon="gg:facebook" width="25" height="25" color="white" />
              <Icon icon="fe:messanger" width="25" height="25" color="white" />
              <Icon  icon="basil:linkedin-solid" width="25" height="25" color="white" />
              <Icon icon="mdi:twitter" width="25" height="25" color="white" />
            </IconBox>   
          </Box>
        </CustomContainer>
     
    </Box>
  );
};

export default Footer;