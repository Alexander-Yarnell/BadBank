import React from "react";
import { UserContext } from "./context";
import Card from "./Card";

function AllData() {
  const ctx = React.useContext(UserContext);
  return <Card title="All Data" body={
    <div>
      <div>{ctx.users[0].name}</div>
      <div>{ctx.users[0].email}</div>
        <div>{ctx.users[0].balance}</div></div>
  }></Card>;
}
export default AllData;
