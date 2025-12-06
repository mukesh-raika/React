import { useEffect } from "react";

const Counter=({count,data})=>{

   const  handelCounter=()=>{   
    console.log(" handelCounter called");
    
   }
    const handleData=()=>{
        console.log("handelData called");
        
    }
    useEffect(()=>{
         handelCounter();
         handleData();
    },[])


    useEffect(()=>{
         handleData();
    },[count,data])
    
    return(
        <div>
            <h1>Counter value{count}</h1>
             <h1> Data value{data}</h1>
            

        </div>
    )
}
export default Counter  