import React from "react";

function Exercise({ eachExercise }) {
  const { date, difficulty, duration, workout } = eachExercise;

  return (
    <div className="each-exercise">
      <img
        className="each-exercise-img"
        src="https://caloriesburnedhq.com/img/biking-distance-300x300.jpg"
      />
      <div className="each-exercise-info">
        <p>{date}</p>
        <h2>{workout.workout_type}</h2>
        <p>Duration: {duration} minutes</p>
        <p>Difficulty: {difficulty}</p>
      </div>
    </div>
  );
}

export default Exercise;
