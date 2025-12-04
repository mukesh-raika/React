
function App(){

  // const userName=['anil','sam','peter','bruce']; Array

   const userData=[
    {
      name:'anil',
      age:'29', 
      email:"anil@test.com",
      id:1
    },
     {
      name:'sam',
      age:'34', 
      email:"sam@test.com",
      id:2
    },
     {
      name:'bruce',
      age:'50', 
      email:"bruce@test.com",
      id:3
    },
     {
      name:'peter',
      age:'21', 
      email:"peter@test.com",
      id:4
    }
   ]
   return (
      <div>
        <h1> Loop in JSX with Map Function</h1>
        <table border="1">
    <thead>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Age</td>
      </tr>
    </thead>
    <tbody>
      {
        userData.map((user)=>(
         <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>  
        <td>{user.age}</td>
      </tr>
        ))
      }
    </tbody>
        </table>

        <h1>Dummy Data</h1>
        <table border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anil</td>
              <td>anil@test.com</td>
              <td>30</td>
              </tr>
              <tr>
              <td>1</td>
              <td>Anil</td>
              <td>anil@test.com</td>
              <td>30</td>
              </tr>
              <tr>
              <td>1</td>
              <td>Anil</td>
              <td>anil@test.com</td>
              <td>30</td>
              </tr>
              <tr>
              <td>1</td>
              <td>Anil</td> 
              <td>anil@test.com</td>
              <td>30</td>
              </tr>
          </tbody>
        </table>
      </div>
   )
}
export default App;