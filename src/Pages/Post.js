import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const post = () => {
  return (
    // <Layout>
    <>
    <Typography variant="h1"  sx={{ fontSize: "1.5rem", lineHeight: "2rem",fontWeight:"700",letterSpacing:"0.25px"}}>
    Events in Vishākhapatnam
             {/* {menu.description} */}
             </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
         
        {/* {MenuList.map((menu) => ( */}
          <Card sx={{ maxWidth: "290px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                image="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F293070639%2F869140772553%2F1%2Foriginal.20220528-013832?w=200&auto=format%2Ccompress&q=75&sharp=10&s=510bac09cabbb7e555ec0e3e11e065d2"
                // src={menu.image}
                // alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {/* {menu.name} */}
                </Typography>
                <Typography variant="body2">
                Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
                    {/* {menu.description} */}
                    </Typography>
                    <Typography variant="body2">
                Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
                    {/* {menu.description} */}
                    </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        {/* ))} */}
      </Box>
      </>
    // </Layout>
  );
};

export default post;