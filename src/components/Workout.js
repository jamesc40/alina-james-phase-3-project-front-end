import { useEffect, useState } from "react";
import EachWorkout from "./EachWorkout";
import map from "lodash/map";
import range from "lodash/range";

export default function Workout() {
  const [workouts, setWorkouts] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:9292/workouts`)
      .then((r) => r.json())
      .then((data) => setWorkouts(data));
  }, []);

  if (workouts === undefined) return <p>loading</p>;

  const bestUser = workouts.most_active_user;
  const bestWorkout = workouts.most_popular_workout;
  const allWorkouts = workouts.workouts;

  const eachWorkoutEl = allWorkouts.map((el) => (
    <EachWorkout key={el.id} workout={el} />
  ));

  return (
    <>
      <div className="workout-container">
        <h2>All Workouts</h2>
        <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
          {map(range(1), (_) => eachWorkoutEl)}
        </div>
      </div>
      <div className="top-info">
        <div>
          <h5>Top user</h5>
          <img className="top-image" src={bestUser.image} />
          <h3>{bestUser.name}</h3>
        </div>
        <div>
          <h5>Most popular workout</h5>
          <img className="top-image" src={bestWorkout.image} />
          <h3> {bestWorkout.workout_type}</h3>
        </div>
      </div>
    </>
  );
}
