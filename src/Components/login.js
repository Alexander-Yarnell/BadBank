import React from "react";
import Card from "./Card";
import BankForm from "./BankForm";
import { UserContext } from "./context";

function Login() {
  const ctx = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  function compare(obj1, obj2, index) {
    if (
      obj1.name === obj2.name &&
      obj1.password === obj2.password &&
      obj1.email === obj2.email
    ) {
      ctx["loggedIn"] = index;
    } else {
      return "Did not Match";
    }
  }

  function handle(data) {
    for (let i = 0; i < ctx.users.length; i++) {
      compare(ctx.users[i], data, i);
    }
  }
  return (
    <Card
      bgcolor="success"
      header="Login"
      status={status}
      body={<BankForm name="Login" handle={handle} />}
    />
  );
}

export default Login;
