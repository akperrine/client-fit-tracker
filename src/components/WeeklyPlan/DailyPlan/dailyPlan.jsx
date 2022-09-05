import "./dailyPlan.css";

const DailyPlan = ({ arrayLength, workoutDay }) => {
  return (
    <div>
      <h6>Workout for day {workoutDay.day}</h6>
      {arrayLength > 0 ? (
        workoutDay.workout.map((workout) => <p>{workout}</p>)
      ) : (
        <p>There is nothing programmed for today</p>
      )}
      {arrayLength > 0 ? <button>Workout Completed</button> : null}
    </div>
  );
};

export default DailyPlan;
