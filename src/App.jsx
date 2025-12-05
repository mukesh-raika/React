
import Reuseloop from "./Reuseloop";

function App() {
  const userData = [
    { name: 'Anil', age: '29', email: "anil@test.com", id: 1 },
    { name: 'Tiger', age: '21', email: "tiger@test.com", id: 2 },
    { name: 'SRK', age: '25', email: "srk@test.com", id: 3 },
    { name: 'Sam', age: '34', email: "sam@test.com", id: 4 },
  ];

  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {userData.map((user) => (
        <Reuseloop key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
