import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import AccountList from "./pages/AccountList";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Provider store={store}>
      <MainPage>
        <Switch>
          <Route path="/accounts">
            <AccountList />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainPage>
    </Provider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
