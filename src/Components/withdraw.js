import React from "react";
import Card from "./Card";
import {UserContext} from "./context";

function Withdraw() {
  const [minusBalance, setMinusBalance] = React.useState(0);
  const [error, setError] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(){
    if(minusBalance == 0){
      setError("Please enter a valid number.");
    }
  }

  function handleSubmit(){
    setError("");
      ctx.users[0].balance -= parseFloat(minusBalance);
    validate();
  }

  return (
    <Card
      title="Withdraw"
      body={
        <div>
          <input type="number" onChange={(e) => setMinusBalance(e.currentTarget.value)} />
          <div style={{color: "red"}}>{error}</div>
          <button onClick={() => handleSubmit()}>submit</button>
        </div>
      }
    ></Card>
  );
}
export default Withdraw;
