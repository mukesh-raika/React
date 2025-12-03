import Props from "./Props";
import Collage from "./collage";

function App() {

    const collages = ["IET", "DU", "IIT", "NIT", "MIT"];

    const users = [
        { name: "Anil Sidhu", age: 29, email: "anil@test.com" },
        { name: "Peter", age: 20, email: "peter@test.com" },
        { name: "Aman", age: 18, email: "aman@test.com" }
    ];

    return (
        <div>
            <h1>Props in React Js</h1>

            <h2>Collages</h2>
            {collages.map((collage, index) => (
                <Collage key={index} name={collage} />
            ))}

            <h2>Users</h2>
            {users.map((user, index) => (
                <Props key={index} user={user} />
            ))}
        </div>
    );
}

export default App;
