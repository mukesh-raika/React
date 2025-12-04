import { useState } from "react";




function Checkbox(){
    const [chakbox,setCheckbox]=useState([]);   
    const handleCheckbox=(event)=>{
     console.log(event.target.value,event.target.checked);
     if(event.target.checked){
      setCheckbox([...chakbox, event.target.value])
     }else {
    setCheckbox(chakbox.filter((item) => item !== event.target.value));
}

    }
    return(
        <div>   
            <h3>Select Your Skills</h3>
            <input onChange={handleCheckbox} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">PHP</label>
             <br />
            <input onChange={handleCheckbox} type="checkbox" id="js" value="js" />
            <label  htmlFor="js">JS</label>
            <br />
            <input onChange={handleCheckbox} type="checkbox" id="node" value="node" />
            <label htmlFor="node">Node</label>
            <br />
            <input onChange={handleCheckbox} type="checkbox" id="java" value="java" />
            <label htmlFor="java">JAVA</label>

            <h1>{chakbox.toString()}</h1>
        </div>


    )
}
export default Checkbox;    