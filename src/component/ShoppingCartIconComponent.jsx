import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartProvider, useCart } from './CartContext';
import { Box, IconButton, Typography } from '@mui/material';

function ShoppingCartIconComponent() {
  const { cartItems } = useCart(); 
  console.log('Cart items updated:', cartItems);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton sx={{ color: 'white' }}>
        <ShoppingCartIcon />
      </IconButton>
      <Typography sx={{ flexGrow: 1, color: 'white' }}>
        {cartItems.length} item(s) {/* Muestra la cantidad de ítems */}
      </Typography>
    </Box>
  );
}

export default ShoppingCartIconComponent;
