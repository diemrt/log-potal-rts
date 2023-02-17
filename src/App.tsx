import useGetProductSelector from "./services/appService";

function App() {
  let {current, dynamicList, newCurrent} = useGetProductSelector();

  return (
    <div className='flex flex-col'>
      <small>{typeof current === "undefined" ? 'Loading...' : 'Success'}</small>
      <h1><b>{current?.positionNumber}. {current?.name} - {current?.apiRoute}</b></h1>
      {dynamicList?.map(p => <button onClick={() => newCurrent(p)}>{p.positionNumber}. {p.name} - {p.apiRoute}</button>)}
    </div>
  );
}

export default App;
