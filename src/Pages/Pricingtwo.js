import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";


import CustomButton from "./CustomButton";

const Pricingtwo = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#f8f7fa",
    height: "416px",
    borderRadius: "15px",
    border:"1px solid black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "1",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
         Hosting a large or complex event?
          </Typography>
          <Typography
            sx={{ fontSize: "13px", color: "black", fontWeight: "500", my: 3 }}
          >
           We offer tailored packages for event pros withkejrfhk rjfhkerjfhk unique needs. Get customized fee schedule, personalized support, and more individualized features by partnering with our sales team.
          </Typography>

          <CustomButton
            backgroundColor="#fff"
            color="black"
            border="1px solid"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box>

        <img
        src="https://eventbrite-s3.s3.amazonaws.com/marketing/landingpages/assets/Contact+Sales_Pricing.svg"
        //   src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default Pricingtwo;