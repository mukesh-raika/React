import { useState } from "react";

const UesToggle=(defaultVal)=>{
    const [value,setValue]=useState(defaultVal);
    
        function toggleValue(val){
        if(typeof val!='boolean'){
            setValue(!value)
        }else{
            setValue(val)
        }
    }
    return[value,toggleValue]; 

}
export default UesToggle;