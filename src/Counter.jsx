import { useEffect } from "react"


const Counter = ({ count, data}) => {


    useEffect(()=>{
        console.log("mounting phase only"); 
  },[])

   useEffect(()=>{
        console.log("update phase only");  
  },[])

  useEffect(()=>{
    return()=>{
        console.log("unmount phase only")
    }
  },[])
    useEffect(()=>{
        return ()=>{
            console.log("unmount phase only")
        }
    },[])



return(
    <div>
        <h1>counter value {count}</h1>
        <h1>Data value{data}</h1>
    </div>
)

}
export default Counter;
