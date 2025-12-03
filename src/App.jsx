import Pass from "./Pass";
import Wrapper from "./Wrapper"

function App() {
  return (
    <div>
      <h1>props in React js</h1>
      <Wrapper color="orange"> 
          <h1>hello Everyone </h1>
      </Wrapper >

      <Wrapper color="blue">
          <h1>hello Anil </h1>
      </Wrapper >

      <Wrapper>
          <h2 style={{color:"red"}}>hello shidu </h2>
      </Wrapper >
      {/* <Pass name="Anil Sidhu" />
      <Pass name="bhasker"/>

      <Pass name="bhasker"/>
      <Pass/>
      <Pass/> */}
    </div>
  );
}

export default App
