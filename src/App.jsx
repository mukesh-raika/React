import { useRef } from "react"
function App(){
const inputRef=useRef(null);
const Refh1=useRef(null);

const inputHandler=()=>{
  console.log(inputRef.current);
  inputRef.current.focus();
  inputRef.current.style.color="red"
  inputRef.current.placeholder="enter password"
   inputRef.current.value="123"
  
}

  const toggleHandler=()=>{
    
    if(inputRef.current.style.display!="none"){
     inputRef.current.style.display='none'
      }else{
        inputRef.current.style.display='inline'
      }
  }
  const h1handler=()=>{
    Refh1.current.style.color = "green"
  }
  return(
    <>
    <h1>useRef</h1> 
    <button onClick={toggleHandler}>Toggle</button>

    <input ref={inputRef} type="text" placeholder="Enter user name"/>
    <button onClick={inputHandler}>Focus on Input field</button>
    <h1 ref={Refh1}>code stap by stap </h1>
    <button onClick={h1handler}>Handler</button>
    </>
  )
}
export default App; 