import React from "react";
import { UserContext } from "./context";
import Card from "./Card";

function AllData() {
  const ctx = React.useContext(UserContext);
  return ctx.users.map(user => <Card title={user.name} body={user.balance}></Card>)
}
export default AllData;
