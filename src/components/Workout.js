import { useEffect, useState } from "react";

export default function Workout() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/workouts`)
      .then((r) => r.json())
      .then((data) => setWorkouts(data));
  }, []);

  console.log(workouts);
  const bestUser = workouts.most_active_user;
  const bestWorkout = workouts.most_popular_workout;
  const allWorkouts = workouts.workouts;

  if (workouts.length === 0) return <p>loading</p>;

  return (
    <>
      <div className="top-info">
        <div>
          <h5>Top user</h5>
          <h3>{bestUser.name}</h3>
          <img className="top-image" src={bestUser.image} />
        </div>
        <div>
          <h5>The most popular workout</h5>
          <h3> {bestWorkout.workout_type}</h3>

          <img className="top-image" src={bestWorkout.image} />
        </div>
      </div>
    </>
  );
}
