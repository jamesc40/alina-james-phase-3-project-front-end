import React from "react";
import Exercise from "./Exercise";
import map from "lodash/map";
import range from "lodash/range";

function UserExercises({ user, handleDeleteExercise }) {
  if (!user) return <h1>loading...</h1>;
  const { exercises, workouts } = user;

  const mapArr = exercises.map((el, i) => (
    <Exercise 
      key={el.id} 
      workouts={workouts[i]} 
      exercise={el} 
      handleDeleteExercise={handleDeleteExercise}
    />
  ));

  return (
    <div className="exercise-container">
      <h2 className="my-workout-user">My Workouts</h2>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(1), (_) => mapArr)}
      </div>
    </div>
  );
}

export default UserExercises;
