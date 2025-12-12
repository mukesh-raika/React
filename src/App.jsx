import { useState } from "react";

export default function App(){

  const [data,setData]=useState([
    'anil','sam','peter','tony'
  ]);

  const [dataDetails,setDataDetails]=useState([
    { name:'anil', age:29 },  
    { name:'sam', age:25 },
    { name:'peter', age:33 },
  ]);

  // last user name update
  const handleUser=(name)=>{
    setData(prev=>{
      const newData = [...prev];
      newData[newData.length - 1] = name;
      return newData;
    });
  };

  // last user age update
  const handleAge=(age)=>{
    setDataDetails(prev=>{
      const newDetails = [...prev];
      newDetails[newDetails.length - 1] = {
        ...newDetails[newDetails.length - 1],
        age: age
      };
      return newDetails;
    });
  };

  return(
    <div>
      <h1>Updating Array in useState</h1>

      <input type="text" placeholder="enter last user name"
        onChange={(e)=>handleUser(e.target.value)}
      />

      {data.map((item,index)=>(
        <h3 key={index}>{item}</h3>
      ))}

      <hr/>

      <input type="text" placeholder="enter last user age"
        onChange={(e)=>handleAge(e.target.value)}
      />

      {dataDetails.map((item,index)=>(
        <h4 key={index}>{item.name}, {item.age}</h4>
      ))}

    </div>
  );
}

