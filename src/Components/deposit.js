import React from "react";
import Card from "./Card";
import { UserContext } from "./context";

function Deposit() {
  const [addBalance, setAddBalance] = React.useState(0);
  const [error, setError] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate() {
    if (addBalance == 0) {
      setError("Please enter a valid number.");
    }
  }

  function handleSubmit() {
    setError("");
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
          <div style={{color: "red"}}>{error}</div>
          <button onClick={() => handleSubmit()}>submit</button>
        </div>
      }
    ></Card>
  );
}
export default Deposit;
