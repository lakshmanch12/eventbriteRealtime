
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Avatar from '@mui/material/Avatar';


const Lakshmanone = () => {
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
    width: "70%",
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
    padding: theme.spacing(0, 8, 0, 6),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(2),
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
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
         

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
            lakshman chimmiti
            </Typography>

            <Typography
               sx={{
                fontSize: "35px",
                color: "#f05537",
                fontWeight: "700",
                my: 3,
              }}
            >
   
Use Your Code To Tell Your Developer Journey
            </Typography>
          </Box>
           <ImgContainer>
           <Avatar
        alt="Remy Sharp"
        src="https://lh3.googleusercontent.com/K0ApcKT70eSTZ055EA-f9h9_QVzmnlaDmwAFZbVI9rPPrVdYDryoISLpcRaUjIkT_-WXljTMmPXK8sbQvfBnZJpR68zl1ri1akdWZ69_GiyEDx-5vII4Rl2rZnHSPISuMxyGzmnU8EiAJd1vEwCs9o4w9vuQyFzusSnHpMeGzyHqU7fVFKZKTz5i5vymF_Yewh227m0IIOyNTkoUhmynj918sP-VEaIDSWV_zi-qK0sPcv2L5p9h-933ah35NfyIwD4qo8nsRsu6QbHbpfJpvNoW9RCLFWWkdPrdYSmpamkjymzviurjxxlZzpEHDvZrNxt4W7D9he7Gn4-BNUmy8OsvC_d1QUeLaxXC3hE-JQPQVTjSwz6HW_lXb4GlV8lG-xSCD_-OMXu3mV1JTCLdfb0d-ieORlBQ6j8dILKnp9lfT3XrJW9BUDf6e2xVhvjwX1OQwb73GOI0g6pq_xUJfEEpPESBZXlxdhh6iF7cP9v-LUAfOYWeph8JpK8rK4YHBXtAzCrmgAB4Y7d8lRK3ZA-3SfBBCnzk6_7IZSKyfRKSHOLsHYx7Ka3VP-HXYGrJ5hwwR-iRNcg4NaK6mvC9E8oZ_wvCIhNPMkakNPnsDvp6QbK_CiqDqN6be8mIo7qnzDzntafuvsX2igVmdaDo6zR0mZagMdoM1N19YHEpSDAUGM6sDEHYRCUm6qKzM-QTZJroabKz5iUl4pb56HPeq1u3bEQrZdUcKmKYUAKjOC3B-lJ0yWMCcA4hCjXCu6uRP676_8z9RwSaA3yZqw4N_5VSlfYw-kyuVN7HnoUaRlBbprwL8Og_dKSw-xBP5hKk6omMHG6m2GCNklloqUgVo5rtKOwKcoqhlGJqK1lHrL3T00AHo2TS2Njir-CQjdqTnjXFnzKLZh6eimXtWGchrh7mWaFIw409ainUQjqY1tgF=w700-h933-s-no?authuser=0"
        sx={{ width: 256, height: 256 }}
      />
            {/* <img 
            src="https://lh3.googleusercontent.com/K0ApcKT70eSTZ055EA-f9h9_QVzmnlaDmwAFZbVI9rPPrVdYDryoISLpcRaUjIkT_-WXljTMmPXK8sbQvfBnZJpR68zl1ri1akdWZ69_GiyEDx-5vII4Rl2rZnHSPISuMxyGzmnU8EiAJd1vEwCs9o4w9vuQyFzusSnHpMeGzyHqU7fVFKZKTz5i5vymF_Yewh227m0IIOyNTkoUhmynj918sP-VEaIDSWV_zi-qK0sPcv2L5p9h-933ah35NfyIwD4qo8nsRsu6QbHbpfJpvNoW9RCLFWWkdPrdYSmpamkjymzviurjxxlZzpEHDvZrNxt4W7D9he7Gn4-BNUmy8OsvC_d1QUeLaxXC3hE-JQPQVTjSwz6HW_lXb4GlV8lG-xSCD_-OMXu3mV1JTCLdfb0d-ieORlBQ6j8dILKnp9lfT3XrJW9BUDf6e2xVhvjwX1OQwb73GOI0g6pq_xUJfEEpPESBZXlxdhh6iF7cP9v-LUAfOYWeph8JpK8rK4YHBXtAzCrmgAB4Y7d8lRK3ZA-3SfBBCnzk6_7IZSKyfRKSHOLsHYx7Ka3VP-HXYGrJ5hwwR-iRNcg4NaK6mvC9E8oZ_wvCIhNPMkakNPnsDvp6QbK_CiqDqN6be8mIo7qnzDzntafuvsX2igVmdaDo6zR0mZagMdoM1N19YHEpSDAUGM6sDEHYRCUm6qKzM-QTZJroabKz5iUl4pb56HPeq1u3bEQrZdUcKmKYUAKjOC3B-lJ0yWMCcA4hCjXCu6uRP676_8z9RwSaA3yZqw4N_5VSlfYw-kyuVN7HnoUaRlBbprwL8Og_dKSw-xBP5hKk6omMHG6m2GCNklloqUgVo5rtKOwKcoqhlGJqK1lHrL3T00AHo2TS2Njir-CQjdqTnjXFnzKLZh6eimXtWGchrh7mWaFIw409ainUQjqY1tgF=w700-h933-s-no?authuser=0"
            alt="house" style={{ width: "90%", height:"90" }} /> */}
          </ImgContainer>
        </CustomBox>

        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>Developer</LargeText>
            <SmallText>Being A Developer Like A lover</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>Coder</LargeText>
            <SmallText>Code never lies, comments sometimes do</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>programmer</LargeText>
            <SmallText>Every programmer is an author.</SmallText>

          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Lakshmanone;