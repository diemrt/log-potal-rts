import Sidebar from "./components/Sidebar.Components/Sidebar.Component";
import useProduct from "./services/appService";

function App() {
  let [product, products, updateProduct] = useProduct();

  return (
    <div className='flex flex-row'>
      <Sidebar useProduct={[product, products, updateProduct]} />
    </div>
  );
}

export default App;
