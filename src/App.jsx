import College from "./College";

function App(){

  const collegeData=[
    {
      name:"IET Alwar",
      city:"Alwar",
      Website:"www.iet.com",
      student:[ 
        {
          name:"Anil sidhu",
          age:'29',
          email:"anil@test.com"
        },
         {
          name:"peter",
          age:'25',
          email:"peter@test.com"
        },
         {
          name:"rok",
          age:'20',
          email:"rok@test.com"
        }
      ]
    },
    {
      name:"IIT Delhi",
      city:"Delhi",
       Website:"www.iit.com",
        student:[ 
        {
          name:"Anil sidhu",
          age:'29',
          email:"anil@test.com"
        },
         {
          name:"peter",
          age:'25',
          email:"peter@test.com"
        },
         {
          name:"rok",
          age:'20',
          email:"rok@test.com"
        }
      ]
    },
    
    {
      name:"KCIET Hisar",
      city:"Hisar",
       Website:"www.Kciit.com",
        student:[ 
        {
          name:"Anil sidhu",
          age:'29',
          email:"anil@test.com"
        },
         {
          name:"peter",
          age:'25',
          email:"peter@test.com"
        },
         {
          name:"rok",
          age:'20',
          email:"rok@test.com"
        }
      ]
    },
    
  ]
  return(
    <div>
      <h1>Nested Looping With Component</h1>
      {
         collegeData.map((college,index)=>(
          <div key={index}>
            <College college={college}/>
          </div>
         ))
      }
    </div>
  )
}

export default App; 