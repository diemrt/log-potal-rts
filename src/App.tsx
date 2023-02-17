import useProduct from "./services/appService";

function App() {
  let [product, products, updateProduct] = useProduct();

  return (
    <div className='flex flex-col'>
      <small>{typeof product === "undefined" ? 'Loading...' : 'Success'}</small>
      <h1><b>{product?.position}. {product?.name} - {product?.apiRoute}</b></h1>
      {products?.map(p => <button onClick={() => updateProduct(p)}>{p.position}. {p.name} - {p.apiRoute}</button>)}
    </div>
  );
}

export default App;
