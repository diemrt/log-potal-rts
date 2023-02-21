import Sidebar from "./components/Sidebar/Sidebar.component";
import { useGETAllProductsQuery } from "./redux/products/products.api";
import useProduct from "./services/appService";

function App() {
  let [product, products, updateProduct] = useProduct();
  const { data, isLoading, isFetching } = useGETAllProductsQuery({});

  return (
    <div className='flex flex-row'>
      <Sidebar useProduct={[product, products, updateProduct]} />
    </div>
  );
}

export default App;
