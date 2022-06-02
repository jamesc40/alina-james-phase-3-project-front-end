import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserExercises from "./UserExercises.js";
import NewExerciseForm from "./NewExerciseForm";
import UserActivity from './UserActivity'

function UserInfo({ id }) {
  const [info, setInfo] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:9292/user/${id}`)
      .then((r) => r.json())
      .then((data) => setInfo(data));
  }, [id]);

  if (info === undefined) return <h1>loading</h1>;

  const handleAddExercise = ({ exercise, workout, total_exercises, total_minutes }) => {
    let exercises = info.exercises
    let workouts = info.workouts
    let newExercises = [...exercises, exercise]
    let newWorkouts = [...workouts, workout]
    setInfo({ ...info, 
      exercises: newExercises, 
      workouts: newWorkouts, 
      total_exercises: total_exercises,
      total_minutes: total_minutes
    })
  }

  return (
    <div>
      <div className="profile-greeting">
        <img src={info.user.image}/>
        <h2 className="greeting-user">Hi, {info.user.name}</h2>
      </div>
      <div className="profile-info">
        <UserExercises user={info} />
        <div>
          <UserActivity user={info} />
          <NewExerciseForm id={id} handleAddExercise={handleAddExercise}/>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
