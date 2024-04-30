import React from 'react';
import ProductGrid from '../component/ProductGrid';
import ShoppingCartIconComponent from '../component/ShoppingCartIconComponent';
import { CartProvider, useCart } from '../component/CartContext'; 

const products = [
  {
    id: 1,
    name: 'Trim Pin 7x0.7x1.2',
    description: 'Manufacturer: Tesla',
    price: '2.23',
    imageUrl: 'https://evparts.lt/image/cache/catalog/IMG_1376-600x315w.jpg.webp',
  },
  {
    id: 2,
    name: 'TPMS, Wheel Sensor, Silver',
    description: 'Manufacturer: Tesla',
    price: '39.33',
    imageUrl: 'https://m.media-amazon.com/images/I/71C-FXVAfjL._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 3,
    name: 'Clip, Heart Flex w/ Washer',
    description: 'Manufacturer: Tesla',
    price: '1.26',
    imageUrl: 'https://m.media-amazon.com/images/I/51uJ+U6HEzL.jpg',
  },
  {
    id: 4,
    name: 'Clip, Heart Flex w/ Washer',
    description: 'Manufacturer: Tesla',
    price: '1.26',
    imageUrl: 'https://m.media-amazon.com/images/I/51XPc0m1FML._AC_.jpg',
  },
  {
    id: 5,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71QD1VgSPKL._AC_UL750_SR750,750_.jpg",
    name: "TRIM PIN",
    manufacturer: "Tesla",
    description: "TRIM PIN 7X0.7X1.2",
    price: "2.23€"
  },
  {
    id: 6,
    imageUrl: "https://i.ebayimg.com/images/g/bhMAAOSw4~lkNp8l/s-l1200.webp",
    name: "WHEEL SENSOR",
    manufacturer: "Tesla",
    description: "TPMS, WHEEL SENSOR, SILVER, 433 MHZ",
    price: "39.33€"
  },
  {
    id: 7,
    imageUrl: "https://m.media-amazon.com/images/I/51okSqSDrrL._AC_UF894,1000_QL80_.jpg",
    name: "SCREW PACK",
    manufacturer: "Tesla",
    description: "SCR,M5-1.8X14,5CKT PAN WSHR HD,TORX,SST",
    price: "0.86€"
  },
  {
    id: 8,
    imageUrl: "https://m.media-amazon.com/images/I/51Olq6rvuQL._AC_UF894,1000_QL80_.jpg",
    name: "CLIP HEART",
    manufacturer: "Tesla",
    description: "CLIP, HEART FLEX W WSHR 70 LBS RETENTION",
    price: "1.26€"
  },

];

function App() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <ProductGrid products={products} />
      <ShoppingCartIconComponent />
    </div>
  );
}

export default App;
