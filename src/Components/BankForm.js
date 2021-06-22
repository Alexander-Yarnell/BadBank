import React from "react";

function BankForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(true);
  const [errorName, setErrorName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");


  function resetErrors() {
    setErrorName("");
    setErrorEmail("");
    setErrorPassword("");
  }

  function validate() {
    if (name && email && password != "" && password.length > 8) {
      setVisible(false);
      resetErrors();
      const data = {
        name: name,
        email: email,
        password: password,
      };
      clearForm();
      props.handle(data);
    }
    if (name == "") {
      setErrorName("Required");
    }
    if (email == "") {
      setErrorEmail("Required");
    }
    if (password.length < 8) {
      setErrorPassword("Required a stronger password");
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
        <div style={{ color: "red" }}>{errorName}</div>
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
        <div style={{ color: "red" }}>{errorEmail}</div>
        Password <br />
        <input
          type="input"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <div style={{ color: "red" }}>{errorPassword}</div>
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
