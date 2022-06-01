import { useRef, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import UserInfo from "./UserInfo";
import Signup from "./Signup";
import HomePage from "./HomePage";
import Header from "./Header";
import HomeHeader from "./HomeHeader";
import ManageAccount from "./ManageAccount";
import Workout from "./Workout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  //const loggedIn = useRef(false)
  let { pathname } = useLocation()

  const handleLogin = () => setLoggedIn(true)
  const handleLogout = () => setLoggedIn(false)

  console.log(loggedIn)
  return (
    <div className="App">
      {pathname === '/' || pathname === '/login' || pathname === 'signup' ? 
        <HomeHeader /> : <Header loggedIn={loggedIn} handleLogout={handleLogout} /> }
      <Switch>
        <Route exact path="/">
          {!loggedIn.current ? <HomePage /> : null}
        </Route>
        <Route exact path="/login">
          <Login loggedin={loggedIn} handleLogin={handleLogin} />
        </Route>
        <Route exact path="/signup">
          <Signup loggedIn={loggedIn} handleLogin={handleLogin} />
        </Route>
        <Route exact path="/user/:id">
          <UserInfo />
        </Route>
        <Route exact path="/update">
          <ManageAccount />
        </Route>
        <Route exact path="/workouts">
          <Workout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
