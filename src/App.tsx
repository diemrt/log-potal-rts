import useProduct from "./services/appService";

function App() {
  let {current, dynamicList, updateCurrent} = useProduct();

  return (
    <div className='flex flex-col'>
      <small>{typeof current === "undefined" ? 'Loading...' : 'Success'}</small>
      <h1><b>{current?.position}. {current?.name} - {current?.apiRoute}</b></h1>
      {dynamicList?.map(p => <button onClick={() => updateCurrent(p)}>{p.position}. {p.name} - {p.apiRoute}</button>)}
    </div>
  );
}

export default App;
