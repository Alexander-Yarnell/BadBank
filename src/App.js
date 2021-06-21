import React from "react";
import "./App.css";
import Nav from "./Components/navbar";
import Home from "./Components/home";
import CreateAccount from "./Components/create-account";
import Login from "./Components/login";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import AllData from "./Components/allData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./Components/context";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "alexander",
                email: "yarnell.alexander@yahoo.com",
                password: "Secret",
                balance: 990,
              },
            ],
          }}
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/create-account" exact component={CreateAccount} />
            <Route path="/login" exact component={Login} />
            <Route path="/deposit" exact component={Deposit} />
            <Route path="/withdraw" exact component={Withdraw} />
            <Route path="/all-data" exact component={AllData} />

          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
