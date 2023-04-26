import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
// import houseCard from "../media/houseCard.png";

const Salesone = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 2 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img 
            src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/enterprise-sales/images/grow_your_business_img_3.jpg"
            // src={houseCard}
             alt="house" style={{ maxWidth: "100%" }} />
          </ImgContainer>

          <Box>
           
            <Typography
              sx={{
                fontSize: "45px",
                color: "#000339",
                fontWeight: "bold",
             
              }}
            >
          Grow your business
            </Typography>

            <Typography
              sx={{
                fontSize: "24px",
                color: "#39364f",
                lineHeight: "32px",
              }}
            >
We helped organizers sell $2.5 billion in paid tickets in 2021 by:
            </Typography>
            <Typography
             sx={{
                fontSize: "24px",
                color: "#39364f",
                lineHeight: "32px",
                 my:5
              }}
            >
                
                Amplifying their brand with Eventbrite Boost’s all-in-one event marketing platform
            </Typography>
            <Typography
            sx={{
                fontSize: "19px",
                color: "black",
                lineHeight: "17px",
                my:5
              }}
            >
Creating a fully embeddable checkout experience on their website or blog
            </Typography>
            <Typography
              sx={{
                fontSize: "19px",
                color: "black",
                lineHeight: "17px",
                my:5
              }}
            >
Leveraging our global events marketplace, where 1 out of 4 Eventbrite tickets are sold
            </Typography>
            <Typography
              sx={{
                fontSize: "19px",
                color: "black",
                lineHeight: "17px",
                my:5
              }}
            >

Easily publishing events and selling more tickets directly on Facebook
            </Typography>
            <Typography
              sx={{
                fontSize: "19px",
                color: "black",
                lineHeight: "17px",
                my:5
              }}
            >

Hosting unforgettable live experiences with early access to ticket revenue
            </Typography>
          </Box>
        </CustomBox>
{/* 
        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Homes For Sale</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3000+</LargeText>
            <SmallText>Properties Rented</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3500+</LargeText>
            <SmallText>Homes Sold</SmallText>
          </Box>
        </TextFlexbox> */}
      </Container>
    </Box>
  );
};

export default Salesone;