import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions,CardActionArea  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';

function ProductGrid() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      title: 'SHOP',
      description: 'Some product description here',
      imageUrl: 'https://s2.abcstatics.com/media/internacional/2020/09/24/tesla-coches-kkYE--1248x698@abc.jpg', 
      link: '/shop', 
    },
    {
      id: 2,
      title: 'ACCESSORIES',
      description: 'Some product description here',
      imageUrl: 'https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/600x600/10101.png', 
      link: '/accessories', 
    },
    {
      id: 3,
      title: 'Information',
      description: 'Some product description here',
      imageUrl: 'https://formato7.com/wp-content/uploads/2020/09/unnamed-11.jpg',
      link: '/catalog', 
    },
  ];

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
              sx={{
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
            <CardActionArea onClick={() => navigate(product.link)}>

            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate(product.link)}>Learn More</Button>
            </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}


function Information (){
  const navigate = useNavigate();
  const proinf =[
  
    {
      id: 12,
      title: 'SHOP',
      description: 'Some product description here',
      imageUrl: 'https://revel-cms-strapi.s3.eu-west-1.amazonaws.com/development/2021_tesla_model_3_long_range_sedan_af_a27512ed98.png',
      link: '/accessories',
    },
    {
      id: 13,
      title: 'CATALOG',
      description: 'Some product description here',
      imageUrl: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb65942520b1e3d8e88cb10/stills_0640_png/MY2023/53330/53330_st0640_116.png', 
      link: '/catalog', 
    },
    {
      id: 14,
      title: 'Information',
      description: 'Some product description here',
      imageUrl: 'https://www.motortrend.com/uploads/2021/11/2021-Tesla-Cybertruck.png', 
      link: '/catalog',
    },
    {
      id: 14,
      title: 'Information',
      description: 'Some product description here',
      imageUrl: 'https://platform.cstatic-images.com/xxlarge/in/v2/stock_photos/d5c757a0-71e4-46ff-abea-d7304edfb762/fbc79fa7-73f2-4842-ac2a-8c1dbbe56edc.png',
      link: '/catalog', 
    }
  
  ]
  return (
    <Grid container spacing={2}>
      {proinf.map((proinf) => (
        <Grid item key={proinf.id} xs={12} sm={6} md={3} lg={3} xl={3}>
          <Card
              sx={{
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
          <CardActionArea onClick={() => navigate(info.link)}>

            <CardMedia
              component="img"
              height="140"
              image={proinf.imageUrl}
              alt={proinf.title}
            />


            </CardActionArea>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
}



function AnimatedBackgroundComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const gifUrl = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanN3cjVxYTZ5NHpwYm9tcTF6cnl4ejN2MGtranNpam5tZTMxM2RhMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aD6ydPRgEPllYQM/giphy.gif';
  
  return (
    <div>
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${gifUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        ref={ref}
        sx={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 1s ease-out',
          color: 'white',
          textAlign: 'center',
          maxWidth: '600px', 
        }}
      >
        <h1>Background lights are cool you know.</h1>
        <p>And this, is chemical burn.</p>
      </Box>
    </Box>
    <Box
        sx={{
          py: 8, 
          px: 2, 
          maxWidth: '1000px', 
          mx: 'auto', 
          textAlign: 'center',
        }}
      >
        <h2>Section</h2>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
<br/>
      <ProductGrid />
      <h2 style={{color:'black'}}>Different car models </h2>

      <Information/>
 
      </Box>
    

    </div>

  );
}

export default AnimatedBackgroundComponent;
