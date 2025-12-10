import { useState } from "react";

export default function App() {

  const[data,setData]=useState({ 
    name:'Anil',
    address:{
    city:'Delhi',
    country:'India '
    }
  })
  
  const handleName=(val)=>{
    data.name=val
    // let tempData =data;

    setData({...data})
    
    
   
  }
  const handleCity=(city)=>{
    data.address.city=city
   
    setData({...data,address:{...data.address,city,}})
    
    
    
  }

  const handleCountry=(country)=>{
    data.address.country=country
   
    setData({...data,address:{...data.address,country,}})
    
    
    
  }
  return(
    <div>
      <h1>Updating Object in State</h1>
      <br/>
      
      <input type="text" placeholder="update name" 
      onChange={(event)=>handleName(event.target.value)}/> 
      <input type="text" placeholder="update city" 
      onChange={(event)=>handleCity(event.target.value)}/> 
      <input type="text" placeholder="Enter Your Country" onChange={(event)=>handleCountry(event.target.value)}   />
    
      
      
      <br/>
      <br />
      <h2>Name:{data.name}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Country:{data.address.country}</h2>
    </div>
  )
}
