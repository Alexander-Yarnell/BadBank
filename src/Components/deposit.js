import React from "react";
import Card from "./Card";
import { UserContext } from "./context";

function Deposit() {
  const [addBalance, setAddBalance] = React.useState(0);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate() {
    if (addBalance == 0 || addBalance < 0) {
      setSuccess("");
      setError("Please enter a valid number.");
    }
    else{
      setError("");
      setSuccess(`You deposit $${addBalance}`);
    }
  }

  function handleSubmit() {
    ctx.users[0].balance += parseFloat(addBalance);
    validate();
  }

  return (
    <Card
      title="Deposit"
      body={
        <div>
          <input
            type="number"
            onChange={(e) => setAddBalance(e.currentTarget.value)}
          />
          <div style={{color: "green"}}>{success}</div>
          <div style={{color: "red"}}>{error}</div>
          <button onClick={() => handleSubmit()}>submit</button>
        </div>
      }
    ></Card>
  );
}
export default Deposit;
