import React from "react";
import Exercise from "./Exercise";

function UserExercises({ exercise }) {
  const eachExercise = exercise.map((el) => (
    <Exercise key={el.id} eachExercise={el} />
  ));
  return <div>{eachExercise}</div>;
}

export default UserExercises;
