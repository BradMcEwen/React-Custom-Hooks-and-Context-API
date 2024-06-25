import { useState } from 'react';


const dummyProducts = [
  { id: 1, name: 'Keyboard', price: 100 },
  { id: 2, name: 'Motherboard', price: 185 },
  { id: 3, name: 'CPU', price: 499 }
];

const useInventory = () => {
  const [products, setProducts] = useState(dummyProducts);

  const fetchProducts = () => {
    return products;
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return {
    products: fetchProducts(), removeProduct
  };
};

export default useInventory;