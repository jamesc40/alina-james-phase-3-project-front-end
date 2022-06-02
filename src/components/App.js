import { useReducer, useState, useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import "../App.css";
import Login from "./Login";
import UserInfo from "./UserInfo";
import Signup from "./Signup";
import HomePage from "./HomePage";
import Header from "./Header";
import HomeHeader from "./HomeHeader";
import ManageAccount from "./ManageAccount";
import Workout from "./Workout";

export const URL = "http://localhost:9292";

const reducer = (user, action) => {
  switch (action.type) {
    case 'login':
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return action.payload.user
    case 'logout':
      localStorage.clear();
      return {}
    case 'delete':
      localStorage.clear();
      return {}
  }
}

function App() {
  const [user, dispatch] = useReducer(reducer, {}, () => {
    const localUser = localStorage.getItem("user")
    return localUser ? JSON.parse(localUser) : {}
  });

  const history = useHistory();
  let { pathname } = useLocation();

  const handleLogin = async (userInfo) => {
    fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          dispatch({ type: 'login', payload: {user: data }})
          history.push(`/user/${data.id}`);
        }
      });
  };

  const handleSignUp = async (newUser) => {
    fetch(`${URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        if (data) {
          dispatch({ type: 'login', payload: {user: data }})
          history.push(`/user/${data.id}`);
        }
      });
  };

  return (
    <div className="App">
      {pathname === "/" || pathname === "/login" || pathname === "/signup" ? (
        <HomeHeader />
      ) : (
        <Header user={user} dispatch={dispatch} />
      )}
      <Switch>
        <Route exact path="/">
          {Object.keys(user).length !== 0 ? 
            <Redirect to={"/user/" + user.id} /> : <HomePage /> 
          }
        </Route>
        <Route exact path="/login">
          <Login
            handleLogin={handleLogin}
          />
        </Route>
        <Route exact path="/signup">
          <Signup
            handleSignUp={handleSignUp}
          />
        </Route>
        <Route path="/user/:id">
          {user ? <UserInfo id={user.id} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/update">
          <ManageAccount id={user.id} dispatch={dispatch}/>
        </Route>
        <Route exact path="/workouts">
          <Workout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
