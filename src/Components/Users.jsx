import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleRemove = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Data will be deleted", data.deletedCount);
        console.log(data.deletedCount);
      });
  };

  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              border: "white 1px solid",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <Link to={`/user/${user._id}`}>
              <button>
                Update
              </button>
            </Link>
            <button onClick={() => handleRemove(user._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
