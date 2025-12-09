function User({ displayName,name,getUser}) {
    // const name=" Anil Sidh" 
  return (
    <div>
      <button onClick={()=>displayName(name)}>Display Name</button>
      <button onClick={()=>getUser ()}>get User </button>
    </div>
  );
}

export default User;
