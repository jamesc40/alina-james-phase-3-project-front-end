import React from "react";
import { Paper } from "@material-ui/core";

function Exercise({ workouts, exercise }) {

  if(!workouts || !exercise) return null

  return (
    <Paper
      style={{
        marginRight: "3vh",
        height: "46vh",
        width: "35vh",
        border: "",
        border: "1px solid #BFBFBF",
        boxShadow: "2px 2px 5px  #BFBFBF",
      }}
    >
      <img className="exercise-img" src={workouts.image} />
      <p>{exercise.date}</p>
      <h2>{workouts.workout_type}</h2>
      <p>Duration: {exercise.duration} minutes</p>
      <p>Difficulty: {exercise.difficulty}</p>
    </Paper>
  );
}

export default Exercise;
