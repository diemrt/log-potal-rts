import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar.Components/Sidebar.Component';
import { Product } from './types/Common.Type';

function App() {
  let [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    setProducts([
      {
        name: "Envelop (dev)",
        apiRoute: "/envelop-dev",
        isCurrent: true
      },
      {
        name: "Envelop (prod)",
        apiRoute: "/envelop-prod",
        isCurrent: false
      },
      
    ])
  });

  return (
    <div className='flex flex-row'>
      <Sidebar products={products} setProductsCallback={setProducts} />
      {products?.at(0)?.apiRoute}
    </div>
  );
}

export default App;
