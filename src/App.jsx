import HomePage from './page/home'
import Shop from './page/shop'
import Accessories from './page/accessories'
import Admin from './page/admin'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CartProvider } from './component/CartContext';
import CartPage from './component/Cart'
import './App.css'
import Navbar from './component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: 'white', 
    },
  },
});


function App() {
  return (
    <CartProvider>

    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar /> {/* Asegúrate de que el Navbar esté dentro de CartProvider */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/Cart" element={<CartPage />} />

          </Routes>
        </ThemeProvider>
        </BrowserRouter>

      </CartProvider>
  );
}

export default App;

