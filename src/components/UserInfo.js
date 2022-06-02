import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserExercises from "./UserExercises.js";
import NewExerciseForm from "./NewExerciseForm";

function UserInfo({ userId }) {
  const [user, setUser] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    userId.current = id;
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:9292/user/${id}`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, [id]);

  if (user === undefined) return <h1>loading</h1>;

  return (
    <div>
      <div className="profile-greeting">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsKE0n1Wa70pdYeKKIiJonNcU-fuNEV0nuw&usqp=CAU" />
        <h2 className="greeting-user">Hi, {user.user.name}</h2>
      </div>
      <div className="profile-info">
        <UserExercises user={user} />
        <NewExerciseForm id={id} />
      </div>
    </div>
  );
}

export default UserInfo;
