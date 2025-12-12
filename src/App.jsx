import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";
import Subject from "./Subject";

export default function App(){
    const[subject,setSubject]=useState('')
    return(
        <div style={{backgroundColor:"yellow",padding:10}}>
            <SubjectContext.Provider value={subject}>
                <select onChange={(event)=>setSubject(event.target. value)}>
                    <option value="">select Subject </option>
                    <option value="Maths">Maths </option>
                    <option value="History">History </option>
                    <option value="English">English </option>
                    <option value="Hindi">Hindi </option>

                </select>
                <h1>Context</h1>
                <College/>
            </SubjectContext.Provider>
        </div>
    )
}