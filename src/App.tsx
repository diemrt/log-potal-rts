import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.Components/Sidebar.Component';
import { SidebarProps } from './components/Sidebar.Components/SiedbarProps.Type';
import { Product } from './types/Common.Type';

function App() {
  let [products, setProducts] = useState<Product[] | undefined>();
  let [currentProduct, setCurrentProduct] = useState<Product>();
  let sidebarProps: SidebarProps = {
    products: products,
    currentProduct: currentProduct,
    setProductsCallback: setProducts,
    setCurrentProductCallback: setCurrentProduct
  }

  useEffect(() => {
    setProducts([
      {
        name: "Store Portal (dev)",
        apiRoute: "/envelop-dev"
      },
      {
        name: "Envelop (prod)",
        apiRoute: "/envelop-prod"
      },
      
    ]);
    setCurrentProduct({
      name: "Store Portal (dev)",
      apiRoute: "/envelop-prod"
    })
  });

  return (
    <div className='flex flex-row'>
      <Sidebar {...sidebarProps} />
      {currentProduct?.name}
    </div>
  );
}

export default App;
