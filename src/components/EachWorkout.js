import React from "react";
import { Paper } from "@material-ui/core";

export default function EachWorkout({ workout }) {
  const { workout_type, image } = workout;

  return (
    <div>
      <Paper
        style={{
          marginTop: "3vh",
          marginRight: "3vh",
          height: "75vh",
          width: "60vh",
          border: "",
          border: "1px solid #BFBFBF",
          boxShadow: "2px 2px 5px  #BFBFBF",
        }}
      >
        <img className="workout-image" src={image} />
        <h2 className="each-workout-name">{workout_type}</h2>
      </Paper>
    </div>
  );
}
