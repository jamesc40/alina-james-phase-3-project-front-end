import React from "react";
import Exercise from "./Exercise";

function UserExercises({ user }) {
  console.log(user)
const {exercises, workouts} = user

  const mapArr = exercises.map((el,i) => {
    return <Exercise  workouts={workouts[i]} exercise={el} />
  })
  // console.log(user);
  // user.map((el) => console.log(el));

  // const eachExercise = user.map(

  //   <Exercise key={el.id} eachExercise={el} />
  // );
  return <div>{mapArr}</div>;
}

export default UserExercises;
