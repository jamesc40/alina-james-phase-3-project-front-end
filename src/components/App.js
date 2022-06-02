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
import { login, signup } from './crud'


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

  const [error, setError] = useState('')

  const history = useHistory();
  let { pathname } = useLocation();

  const handleLogin = (userInfo) => {
    login(userInfo).then((data) => {
        if (data) {
          setError('')
          dispatch({ type: 'login', payload: {user: data }})
          history.push(`/user/${data.id}`);
        }
        else {
          setError('Oops I did it again')
        }
      })
  }

  const handleSignUp = (newUser) => {
    signup(newUser).then((data) => {
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
            error={error}
            handleLogin={handleLogin}
          />
        </Route>
        <Route exact path="/signup">
          <Signup
            handleSignUp={handleSignUp}
          />
        </Route>
        <Route path="/user/:id">
          {Object.keys(user).length !== 0 ? <UserInfo id={user.id} /> : <Redirect to="/" />}
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
