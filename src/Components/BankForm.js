import React from "react";

function BankForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [visible, setVisible] = React.useState(true);

  function validate() {
    if (name && email && password != "") {
      setVisible(false);
      setError("");
      const data = {
        name: name,
        email: email,
        password: password,
      };
      clearForm();
      props.handle(data);
    } else {
      setError("Required field missing");
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleData(event) {
    event.preventDefault();
    validate();
  }
  return visible ? (
    <>
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
        <div style={{ color: "red" }}>{error}</div>
        <button type="submit" onClick={handleData}>
          Create Account
        </button>
      </form>
    </>
  ) : (
    <>
      <button onClick={() => setVisible(true)}>Go Back</button>
    </>
  );
}
export default BankForm;
