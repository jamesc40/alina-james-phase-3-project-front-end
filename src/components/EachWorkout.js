export default function EachWorkout ({ workout }) {
  const { workout_type, image } = workout 

  return (
    <div>
      <img className='workout-image' src={image} />
      <h2>{workout_type}</h2>
    </div>
  )
}
