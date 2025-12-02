import{ useState } from "react"
import User from "./User"
function  App(){
     const [display]=useState(true)
        return( 
            <>
            <h1>Toggle in Rect js</h1>
            <button onClick={()=>setDsplay(!display)}>Toggle </button>

            {/* {
                display ?<h1>Anil sidhu</h1>:null
            } */}
           
    {
        display && <User/> 
    }         
            </>
) 
}
export default App;