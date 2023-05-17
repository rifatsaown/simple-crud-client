import "./App.css";

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users" , {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
      });
  };

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
