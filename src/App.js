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
            loggedIn: 0,
            users: [
              {
                name: "Test-Account",
                email: "Test@test.test",
                password: "TestPassword",
                balance: 990,
                feed: ["Test1 account"],
              },
              {
                name: "Person2",
                email: "person2@gmail.com",
                password: "SecretPassword",
                balance: 300,
                feed: ["Person2 account"],
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
