function Props({ user }) {
    if (!user) return null; // safety check

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <hr />
        </div>
    );
}

export default Props;
