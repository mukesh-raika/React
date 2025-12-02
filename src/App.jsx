
import { useState } from "react";
import Counnter from "./Counter";
function App(){
    const [fruit,setFruit]=useState();
    const handleFruit=()=>{
        setFruit("banana")
        
    }
    return (
            <div>
                <h1>state in react js</h1>
                
                <h1>{fruit}</h1>
                <button onClick={handleFruit}>Change Fruit Name</button>
                <Counnter fruit={fruit}/>
            </div>
    )
}
export default App
