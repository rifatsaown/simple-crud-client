import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const { _id, name, email } = loadedUser;
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Data will be updated");
        }
      });
  };
  return (
    <div>
      {loadedUser && (
        <div>
          <h2>Update the info of {name}</h2>
          <form onSubmit={handleUpdate}>
            <input type="text" name="name" defaultValue={name} />
            <br />
            <input type="email" name="email" defaultValue={email} />
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Update;
