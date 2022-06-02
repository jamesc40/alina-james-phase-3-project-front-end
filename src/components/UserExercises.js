import React from "react";
import Exercise from "./Exercise";

function UserExercises({ user }) {
  if(!user) return <h1>loading...</h1>
  const {exercises, workouts} = user

  const mapArr = exercises.map((el,i) => {
    return <Exercise key={el.id} workouts={workouts[i]} exercise={el} />
  })

  return <div>{mapArr}</div>;
}

export default UserExercises;
