import React from "react";
import Card from "./Card";
import BankForm from "./BankForm";
import {UserContext} from "./context";

function Login() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");

  function handle(data) {
    console.log(JSON.stringify(ctx));
    console.log(data);
  }
  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={<BankForm name="Login" handle={handle}></BankForm>}
    ></Card>
  );
}

export default Login;
