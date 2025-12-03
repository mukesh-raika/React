import { useState } from "react"
import { ssrExportNameKey } from "vite/module-runner";

function App() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  return(
    <div> 
      <h1>Controller componend</h1>
    <from action=""method="get">
      <input type="text"value={name} onChange={(event)=>setName(event.target.value)}  placeholder="Enter Name" />
      <br/> <br />
       <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password" />
      <br/> <br />
       <input type="text"value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" />
      <br/> <br />
      <button>submit</button>

      <button onClick={()=>{setEmail('');setName('');setPassword('')}}>clear</button>



      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </from>
    </div>
  )
}
export default App