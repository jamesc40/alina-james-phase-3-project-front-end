import React, { useState, useEffect } from "react";
import UserExercises from "./UserExercises.js";
import NewExerciseForm from "./NewExerciseForm";
import UserActivity from "./UserActivity";
import { getInfo } from './crud'
import { Spinner } from "react-bootstrap";

function UserInfo({ id }) {
  const [info, setInfo] = useState(undefined);

  useEffect(() => {
    getInfo(id).then((data) => setInfo(data));
  }, [id]);

  if (info === undefined)
    return <Spinner id="loading" animation="border" variant="light" />;

  const handleAddExercise = ({
    exercise,
    workout,
    total_exercises,
    total_minutes,
  }) => {
    let exercises = info.exercises;
    let workouts = info.workouts;
    let newExercises = [...exercises, exercise];
    let newWorkouts = [...workouts, workout];
    setInfo({
      ...info,
      exercises: newExercises,
      workouts: newWorkouts,
      total_exercises: total_exercises,
      total_minutes: total_minutes,
    });
  };

  return (
    <div className="UserInfo">
      <div className="user">
        <div className="profile-greeting">
          <img className="user-img" src={info.user.image} />
          <h2 className="greeting-user">Hi, {info.user.name}</h2>
        </div>

        <div className="profile-info">
          <UserActivity user={info} />
          <NewExerciseForm id={id} handleAddExercise={handleAddExercise} />
        </div>
      </div>
      <UserExercises user={info} />
    </div>
  );
}

export default UserInfo;
