import React from 'react';
import ProductGrid from '../component/ProductGrid';

const products = [
  {
    id: 1,
    name: 'Trim Pin 7x0.7x1.2',
    description: 'Manufacturer: Tesla',
    price: '2.23',
    imageUrl: 'link-to-image',
  },
  {
    id: 2,
    name: 'TPMS, Wheel Sensor, Silver',
    description: 'Manufacturer: Tesla',
    price: '39.33',
    imageUrl: 'link-to-image',
  },
  {
    id: 3,
    name: 'Clip, Heart Flex w/ Washer',
    description: 'Manufacturer: Tesla',
    price: '1.26',
    imageUrl: 'link-to-image',
  },
  {
    id: 3,
    name: 'Clip, Heart Flex w/ Washer',
    description: 'Manufacturer: Tesla',
    price: '1.26',
    imageUrl: 'link-to-image',
  },
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/200x140",
    name: "TRIM PIN",
    manufacturer: "Tesla",
    description: "TRIM PIN 7X0.7X1.2",
    price: "2.23€"
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/200x140",
    name: "WHEEL SENSOR",
    manufacturer: "Tesla",
    description: "TPMS, WHEEL SENSOR, SILVER, 433 MHZ",
    price: "39.33€"
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/200x140",
    name: "SCREW PACK",
    manufacturer: "Tesla",
    description: "SCR,M5-1.8X14,5CKT PAN WSHR HD,TORX,SST",
    price: "0.86€"
  },
  {
    id: 4,
    imageUrl: "https://via.placeholder.com/200x140",
    name: "CLIP HEART",
    manufacturer: "Tesla",
    description: "CLIP, HEART FLEX W WSHR 70 LBS RETENTION",
    price: "1.26€"
  },

];

function App() {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export default App;
