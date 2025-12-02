function ToDo() {

  function callfun() {
    alert("Button Clicked!");
  }

  return (
    <div>
      <h1>Anil Sidhu ToDos</h1>

      <img 
  src="https://picsum.photos/id/1018/200/200" 
  alt="Beautiful Nature"
  className="photo"
/>


      <ul>
        <li>Invent new traffic</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

      <button onClick={callfun}>Click Me</button>
    </div>
  );
}

export default ToDo;
