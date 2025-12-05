
import { useEffect, useState } from "react";

const Clock = ({ color }) => {
  const [time, setTime] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => { setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 
        style={{color:color,backgroundColor: "#000", width: "120px", padding: "10px", borderRadius: "5px" }} >  {time}
      </h1>
    </div>
  );
};

export default Clock;
