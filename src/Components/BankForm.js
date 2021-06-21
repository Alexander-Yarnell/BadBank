import React from "react";

function BankForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function clearForm(){
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleData(event) {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    clearForm();
    event.preventDefault();
    props.handle(data);
  }
  return (
    <form>
      Name <br />
      <input
        type="input"
        className="form-control"
        id="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      Email
      <br />
      <input
        type="input"
        className="form-control"
        id="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      Password <br />
      <input
        type="input"
        className="form-control"
        id="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button type="submit" onClick={handleData}>
        Create Account
      </button>
    </form>
  );
}
export default BankForm;
