import styled from "styled-components"

function App(){
  
  // const Heading =styled.h1`
  // color:red;
  // border:1px solid green;
  //  border-radius:5px;
  //  margin:20px;
  //  padding:20px
  // `

  const Heading=styled.h1({
  color:'red',
  border:'1px solid green',
   borderRadius:'5px',
   margin:'20px',
   padding:'20px',
  })

  const StyleBtn=styled.button`
  color:red; 
  width:130px;
  height:40px ;
  margin:20px;

  `

  return(
    <>
      <h1>Style component with React js</h1>
      <Heading>Hello heading1</Heading>
      <Heading>Hello heading2</Heading>
      <Heading>Hello heading3</Heading>
      <Heading>Hello heading4</Heading>
      <Heading>Hello heading5</Heading>
     <StyleBtn>Login</StyleBtn>
     <StyleBtn>signup</StyleBtn>
     <StyleBtn>Bakc </StyleBtn>
     <StyleBtn>logaut</StyleBtn>
    </>
  )
}
export default App