import React from "react";
import Card from "./Card";
import {UserContext} from "./context";

function Deposit() {
  const [addBalance, setAddBalance] = React.useState(0);
  const ctx = React.useContext(UserContext);

  function handleSubmit(){
      ctx.users[0].balance += parseFloat(addBalance);
  }

  return (
    <Card
      title="Deposit"
      body={
        <div>
          <input type="number" onChange={(e) => setAddBalance(e.currentTarget.value)} />
          <button onClick={() => handleSubmit()}>submit</button>
        </div>
      }
    ></Card>
  );
}
export default Deposit;
