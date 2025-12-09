import { useState } from "react";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "250px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px"
  });
  const [textColor,setTextColor]=useState('black');
  const[grid,setGrid]=useState('true') 

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor})
      setTextColor(textColor)
    }

  return (
    <>
      <h1 style={{ color: "red" }}>Dynamic and Condition Inline Style</h1>

      <button onClick={() => updateTheme("gray", "green")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>Default Theme</button>
      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
      
      <div style={{ display: grid?'flex':'block', flexWrap: 'wrap' }}>
        
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>Ninja Coder</h4>
          <p>Software Developer</p>
        </div>

        
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>React Developer</h4>
          <p>Frontend Engineer</p>
        </div>

        
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>Full-Stack Ninja</h4>
          <p>MERN Developer</p>
        </div>

  <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>Full-Stack Ninja</h4>
          <p>MERN Developer</p>
        </div>

  <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>Full-Stack Ninja</h4>
          <p>MERN Developer</p>
        </div>

  <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>Full-Stack Ninja</h4>
          <p>MERN Developer</p>
        </div>

  <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>Full-Stack Ninja</h4>
          <p>MERN Developer</p>
        </div>

  <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2zvpO6R6ZgGxB-qRp6NxexAZjkH5MndFb-lezV4uOg&s"
            alt="demo"
          />
          <h4>Full-Stack Ninja</h4>
          <p>MERN Developer</p>
        </div>

      </div>
    </>
  );
}

export default App;
