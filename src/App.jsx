import UesToggle from "./UseToggle"

export default function App(){
    const [value,toggleValue]=UesToggle(true)

    const  [data,setData]=UesToggle(true);  

    console.log("val----",value);
    
    return(
        <div>
            <button onClick={toggleValue}>Toggle Heading</button>
            <button onClick={()=>toggleValue(false)}>Hide Heading</button>
            <button onClick={()=>toggleValue(true)}>Show Heading</button>

            {
                value? <h1>Custom Hooks in React Js</h1>:null
            }
            <hr/>
            <button onClick={setData}>Toggle Heding</button>
            <button onClick={()=>setData(false)}>Hide Heading</button>
            <button onClick={()=>setData(true)}>Show Heading</button>

            {
                data? <h1>Second Heading</h1>:null
            }
        </div>  
    )
}
