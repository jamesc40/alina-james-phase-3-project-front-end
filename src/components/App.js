import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Login from "./Login";
import UserInfo from "./UserInfo";
import Signup from "./Signup";
import HomePage from "./HomePage";
import Header from "./Header";
import HomeHeader from "./HomeHeader";
import ManageAccount from "./ManageAccount";
import Workout from './Workout'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {!loggedIn ? (
            <>
              <HomeHeader />
              <HomePage />
            </>
          ) : null}
        </Route>
        <Route exact path="/login">
          <HomeHeader />
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/signup">
          <HomeHeader />
          <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route exact path="/user/:id">
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <UserInfo />
        </Route>
        <Route exact path="/update">
          <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <ManageAccount />
        <Route exact path='/workouts'>
          <Workout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
