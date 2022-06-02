import React from "react";
import Exercise from "./Exercise";
import map from "lodash/map";
import range from "lodash/range";

function UserExercises({ user }) {
  if (!user) return <h1>loading...</h1>;
  const { exercises, workouts } = user;

  const mapArr = exercises.map((el, i) => {
    return <Exercise workouts={workouts[i]} exercise={el} />;
  });

  return (
    <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
      {map(range(1), (_) => mapArr)}
    </div>
  );
}

export default UserExercises;
