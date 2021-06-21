import React from "react";
import BankForm from "./BankForm";
import Card from "./Card";
import {UserContext} from "./context";

function CreateAccount() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");

  function handle(data) {
    ctx.users.push({
      name: data.name,
      email: data.email,
      password: data.password,
      balance: 100,
    });

  }

  return (
    <Card
      bgcolor="primary"
      header="CreateAccount"
      status={status}
      body={<BankForm name="CreateAccount" handle={handle}></BankForm>}
    ></Card>
  );
}

export default CreateAccount;
