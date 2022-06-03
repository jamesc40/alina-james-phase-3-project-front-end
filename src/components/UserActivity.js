export default function UserActivity({ user }) {
  return (
    <div>
      <h1>ACTIVITY</h1>
      <h3 className="activity-num">{user.total_exercises}</h3>
      <p>Total workouts</p>
      <h3>{user.total_minutes}</h3>
      <p>Total minutes</p>
    </div>
  );
}
