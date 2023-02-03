import React from 'react';
import useSayHi from './useSayHi';

function App(props: {name: string}) {
  const hi = useSayHi(props.name);

  return (
    <h1>{hi}</h1>
  );
}

export default App;
