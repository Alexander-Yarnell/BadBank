import React from "react";
import Card from "./Card";
import { UserContext } from "./context";

function Withdraw() {
  const [minusBalance, setMinusBalance] = React.useState(0);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate() {
    if (minusBalance == 0 || minusBalance < 0) {
      setSuccess("");
      setError("Please enter a valid number.");
    } else {
      setError("");
      setSuccess(`You withdrew  $${minusBalance}`);
    }
  }

  function handleSubmit() {
    setError("");
    ctx.users[ctx.loggedIn].balance -= parseFloat(minusBalance);
    ctx.users[ctx.loggedIn].feed.push(`Withdrew $${minusBalance}`)
    validate();
  }

  return (
    <Card
      title="Withdraw"
      body={
        <div>
          <input
            type="number"
            onChange={(e) => setMinusBalance(e.currentTarget.value)}
          />
          <div style={{ color: "green" }}>{success}</div>
          <div style={{ color: "red" }}>{error}</div>
          <button onClick={() => handleSubmit()}>submit</button>
        </div>
      }
    ></Card>
  );
}
export default Withdraw;
