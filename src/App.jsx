import { useState, useTransition } from "react";

function App (){
  const[pending,startTransition]=useTransition();

  const handleButton=()=>{ 

    startTransition(async()=>{
   await new Promise(res=>setTimeout(res,5000))

    })
    

   
    
  }
  return(
    <div>
      <h1>useTransition Hook in React js 19</h1>
      {
        pending?
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
      :null 
      }
      <button disabled={pending} onClick={handleButton }>Click</button>

    </div>
  )
}
export default App;  