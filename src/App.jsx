//  let guest=0
function App(){

  return( 
    <>
    <h1>Keeping Component pure</h1>
     <Cup guest={1}/>
     <Cup guest={3} />
     <Cup guest={5} />
    
    </>
  )
}

const Cup=({guest})=>{
  // guest=guest+1;
  return(
    <h1>we have {guest}guest and we have to make {guest} cup of tea </h1>
  )
}


export default App;