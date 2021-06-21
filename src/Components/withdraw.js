import React from "react";
import Card from "./Card";
import {UserContext} from "./context";

function Withdraw() {
  const [minusBalance, setMinusBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function handleSubmit(){
      ctx.users[0].balance -= parseFloat(minusBalance);
  }

  return (
    <Card
      title="Withdraw"
      body={
        <div>
          <input type="number" onChange={(e) => setMinusBalance(e.currentTarget.value)} />
          <button onClick={() => handleSubmit()}>submit</button>
        </div>
      }
    ></Card>
  );
}
export default Withdraw;
