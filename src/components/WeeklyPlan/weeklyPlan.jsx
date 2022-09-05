import "./weeklyPlan.css";
import DailyPlan from "./DailyPlan/dailyPlan";

const WeeklyPlan = ({ username, weeksWorkouts }) => {
  return (
    <div>
      <h2>Welcome {username}</h2>
      {weeksWorkouts.map((workoutDay) => {
        const arrayLength = workoutDay.workout.length;
        return <DailyPlan arrayLength={arrayLength} workoutDay={workoutDay} />;
        {
          /* return (
          <div>
            <h6>Workout for day {workoutDay.day}</h6>
            {workoutArrLength > 0 ? (
              workoutDay.workout.map((workout) => <p>{workout}</p>)
            ) : (
              <p>There is nothing programmed for today</p>
            )}
            {workoutArrLength > 0 ? <button>Workout Completed</button> : null}
          </div>
        ); */
        }
      })}
    </div>
  );
};

export default WeeklyPlan;
