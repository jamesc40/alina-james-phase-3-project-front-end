import React from "react";

function Exercise({ eachExercise }) {
  console.log(eachExercise);
  const { date, difficulty, duration, workout_id } = eachExercise;

  return (
    <div className="each-exercise">
      <img
        className="each-exercise-img"
        src="https://caloriesburnedhq.com/img/biking-distance-300x300.jpg"
      />
      <div className="each-exercise-info">
        <p>{date}</p>
        <h2>{workout_id}</h2>
        <p>Duration: {duration} minutes</p>
        <p>Difficulty: {difficulty}</p>
      </div>
    </div>
  );
}

export default Exercise;
