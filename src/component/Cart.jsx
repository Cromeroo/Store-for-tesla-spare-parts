import React from 'react';
import { useCart } from './CartContext';
import { Card, CardMedia, CardContent, Typography, IconButton, Button, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <Box style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Tu Carrito</Typography>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Card key={item.id} style={{ display: 'flex', marginBottom: '10px', alignItems: 'center', padding: '10px' }}>
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt={item.name}
              style={{ width: '100px', height: '100px', marginRight: '20px' }}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="textSecondary">{item.description}</Typography>
              <Box style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <IconButton onClick={() => removeFromCart(item.id)} color="primary">
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <Typography style={{ margin: '0 10px' }}>{item.quantity}</Typography>
                <IconButton onClick={() => addToCart(item)} color="primary">
                  <AddCircleOutlineIcon />
                </IconButton>
                <IconButton onClick={() => removeFromCart(item.id, true)} style={{ marginLeft: 'auto' }} color="secondary">
                  <DeleteOutlineIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography>No hay productos en tu carrito.</Typography>
      )}
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Confirmar Pedido
      </Button>
    </Box>
  );
}

export default CartPage;
