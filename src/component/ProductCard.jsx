import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useCart } from './CartContext'; 

function ProductCard({ product }) {
  const { addToCart, removeFromCart  } = useCart();

  const handleAddToCart = () => {
    console.log('Adding to cart:', product); 
    addToCart(product);
  };
  const handleRemoveFromCart = () => {
    console.log('Removing from cart:', product.id);
    removeFromCart(product.id);
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box component="img" sx={{ height: 140, width: '100%', objectFit: 'contain' }} src={product.imageUrl} alt={product.name} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.manufacturer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>Add to Cart</Button> {/* Usando handleAddToCart aquí */}
        <Button size="small" onClick={handleRemoveFromCart}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
