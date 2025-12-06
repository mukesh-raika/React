import { useEffect, useState } from "react";

function App() {

  const [Counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    callOnce();
  
  }, []);

  function callOnce() {
    console.log("callOnce function called", );
  }
const userOne= ()=>{
  console.log("This Function is run 1");
  
}
  useEffect(() => {
   userOne();
  }, []);

  return (
    <div>
      <h1>useEffect Hook</h1>
      <button onClick={() => setCounter(Counter + 1)}>Counter {Counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </div>
  );
}

export default App;
