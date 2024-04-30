import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import ShoppingCartIconComponent from '../component/ShoppingCartIconComponent';

function ProductGrid({ products }) {
  return (

    <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: '100%', mx: 'auto' }}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
          <ShoppingCartIconComponent />

        </Grid>
      ))}
    </Grid>

  );
}
export default ProductGrid;