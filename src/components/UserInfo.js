import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserExercises from "./UserExercises.js";
import NewExerciseForm from "./NewExerciseForm";

function UserInfo({ id }) {
  const [info, setInfo] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:9292/user/${id}`)
      .then((r) => r.json())
      .then((data) => setInfo(data));
  }, [id]);

  if (info === undefined) return <h1>loading</h1>;


  //let someExercises = info.exercises
  //let newExercises = [...someExercises, 'adsfasdf']
  //let newInfo = {...info, exercises: newExercises }

  const handleAddExercise = ({ exercise, workout }) => {
    let exercises = info.exercises
    let workouts = info.workouts
    let newExercises = [...exercises, exercise]
    let newWorkouts = [...workouts, workout]
    setInfo({ ...info, exercises: newExercises, workouts: newWorkouts })
  }

  return (
    <div>
      <div className="profile-greeting">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsKE0n1Wa70pdYeKKIiJonNcU-fuNEV0nuw&usqp=CAU" />
        <h2 className="greeting-user">Hi, {info.user.name}</h2>
      </div>
      <div className="profile-info">
        <UserExercises user={info} />
        <NewExerciseForm id={id} handleAddExercise={handleAddExercise}/>
      </div>
    </div>
  );
}

export default UserInfo;
