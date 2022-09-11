import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import './App.css'
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useState } from "react";
function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const handleRegister = (username, password) => {
    return fetch(`http://79.143.31.216/register?username=${username}&password=${password}`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
    .then((data) => {
      if(data) {
        history.push("/sign-in");
      }
    }) 
  }
  const handleLogin = (username, password) => {
    auth
      .authorize(username, password)
      .then((data) => {
        if(data.access_token) {
          setUserName(username)
          setLoggedIn(true);
          history.push("/");
        }
        else {
          alert('Неправильный логин или пароль')
        }
      })
      .catch(err => console.log(err));
  }

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/sign-in");
  };

  return (
    <div className="app">
      <Header
        loggedIn={loggedIn}
        onSignOut={handleSignOut}
        userData={username}
      />
      <Switch>
        <ProtectedRoute
        exact
        path="/"
        component={Main}
        loggedIn={loggedIn}
      />
      <Route path="/sign-up">
      <Register
      onSubmit={handleRegister}
      />
      </Route>
      <Route path="/sign-in">
      <Login
      onSubmit={handleLogin}
      />
      </Route>
      <Route>
        {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
      </Route>
      </Switch>
    </div>
  );
}

export default App;
