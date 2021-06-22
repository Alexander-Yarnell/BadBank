import React from "react";
import { UserContext } from "./context";
import Card from "./Card";

function AllData() {
  const ctx = React.useContext(UserContext);
  return ctx.users[ctx.loggedIn].feed.map((user) => (
    <div>
      <Card
        title={ctx.users[ctx.loggedIn].name}
        body={<div>
          <h1>{ctx.users[ctx.loggedIn].balance}</h1>
          <h5>{user}</h5>
      </div>}
      ></Card>
    </div>
  ));
}
export default AllData;
