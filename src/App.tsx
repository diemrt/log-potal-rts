import React, { useState } from 'react';
import Sidebar from './components/Sidebar.Components/Sidebar.Component';

function App() {
  let [resultGETAllProducts, setResultGETAllProducts] = useState();
  let [resultGETUser, setResultGETUser] = useState();

  return (
    <div className='flex flex-row'>
      <Sidebar products={resultGETAllProducts} user={resultGETUser} />
    </div>
  );
}

export default App;
