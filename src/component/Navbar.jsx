import React, { useState } from 'react';
import {
  CssBaseline,AppBar, Toolbar, Typography, IconButton, Button, Box, InputBase, Drawer, List, ListItem, ListItemText, Hidden
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { CartProvider, useCart } from './CartContext';

const NavBar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {['CARS', 'ACCESSORIES', 'SHOP', 'CATALOG', 'SPECIAL', 'CONTACT'].map((text) => (
      <Link to={`/${text.toLowerCase()}`} key={text} style={{ textDecoration: 'none' }}>

          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
        ))}
      </List>
    </Box>
  );
  console.log('Cart items in Navbar:', cartItems);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart'); 
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#0e305d', color: 'white' }}>
        <Toolbar sx={{ justifyContent: { xs: 'flex-start', md: 'center' } }}>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" sx={{ flexGrow: 1, display: 'flex', textAlign: 'center', alignItems: 'center', marginLeft: { md: 16 } }}>
          <Link to="/" className="link-hover-effect">Empresa</Link>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="Part search..."
              sx={{
                color: 'white',
                backgroundColor: '#555',
                borderRadius: '4px',
                padding: '6px 12px',
                marginRight: '8px',
              }}
            />
            <IconButton sx={{ color: 'white' }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }} onClick={goToCart}>
              <ShoppingCartIcon />
            </IconButton>
            <Typography sx={{ flexGrow:1, color: 'white' }}>
            {totalItems} item(s)
            </Typography>

          </Box>
        </Toolbar>
        
        <Toolbar component="nav" sx={{ justifyContent: 'center', backgroundColor: '#0077ff', py: 1, display: { xs: 'none', sm: 'flex' } }}>
          {['CARS', 'ACCESSORIES', 'SHOP', 'CATALOG', 'SPECIAL', 'CONTACT'].map((text) => (
            <Link to={`/${text.toLowerCase()}`} key={text} style={{ textDecoration: 'none' }}>
            <Button key={text} sx={{ color: 'white', fontWeight: 'bold', mx:12 }}>
              {text}
            </Button>
            </Link>

          ))}
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
