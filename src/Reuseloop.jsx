
const Reuseloop = ({ user }) => {
    return (
        <div style={{border: "1px solid gray", padding: "10px", margin:"10px", margin:"10px",width:"400px", borderRadius:"10px"}}>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
        </div>
    );
};

export default Reuseloop;
