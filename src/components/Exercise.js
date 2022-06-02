import React from "react";

function Exercise({ workouts, exercise }) {
  // console.log(eachExercise);
  
  console.log(workouts)
  console.log(exercise)

  return (
    <div className="each-exercise">
      <img
        className="each-exercise-img"
        src={workouts.image}
      />
      <div className="each-exercise-info">
        <p></p>
        <h2>{workouts.workout_type}</h2>
        <p>Duration: {exercise.duration} minutes</p>
        <p>Difficulty: {exercise.difficulty}</p>
      </div>
    </div>
  );
}

export default Exercise;
