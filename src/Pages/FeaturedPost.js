import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography  component="h2" variant="h6" sx={{fontWeight:'800'}}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{fontSize: '14px',fontWeight:'800',color:'#d1410c'}}>
              {post.date}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
             Free
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 280, height:130, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;