import { useRef, useState, useEffect } from "react";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  //const loggedIn = useRef(false)
  const userId = useRef(undefined);
  let { pathname } = useLocation();

  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      setUser(foundUser);
    }
  }, []);

  console.log(user);
  const handleSub = async (e, userLogged) => {
    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogged),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
          console.log(data);
          console.log(localStorage);
          history.push(`/user/${data.id}`);
        }
      });
    handleLogin(localStorage);
  };
  const handleSignUp = async (newUser) => {
    fetch("http://localhost:9292/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data) {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          history.push(`/user/${data.id}`);
          setUser(data);
        }
      });
  };

  const handleLogin = () => setLoggedIn(true);
  // const handleLogout = () => setLoggedIn(false);

  function handleLogout() {
    setUser();
    localStorage.clear();
  }

  return (
    <div className="App">
      {pathname === "/" || pathname === "/login" || pathname === "/signup" ? (
        <HomeHeader />
      ) : (
        <Header user={user} loggedIn={loggedIn} handleLogout={handleLogout} />
      )}
      <Switch>
        <Route exact path="/">
          {!user ? <HomePage /> : <Redirect to={"/user/" + user.id} />}
          {/* {!loggedIn.current ? <HomePage /> : null} */}
        </Route>
        <Route exact path="/login">
          <Login
            loggedin={loggedIn}
            handleLogin={handleLogin}
            handleSub={handleSub}
          />
        </Route>
        <Route exact path="/signup">
          <Signup
            user={user}
            setUser={setUser}
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
          />
        </Route>
        <Route path="/user/:id">
          {user ? <UserInfo userId={userId} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/update">
          <ManageAccount id={userId} />
        </Route>
        <Route exact path="/workouts">
          <Workout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
