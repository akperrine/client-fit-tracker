import "./dailyPlan.css";

const weekdayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DailyPlan = ({ arrayLength, workoutDay }) => {
  const weekday = weekdayArr[workoutDay.day - 1];
  return (
    <div className="weekday-container">
      <h6>{`${weekday}`}</h6>
      {arrayLength > 0 ? (
        workoutDay.workout.map((workout) => (
          <p className="workout-content">{workout}</p>
        ))
      ) : (
        <p className="workout-content"></p>
      )}
      {arrayLength > 0 ? (
        <button className="btn complete-btn">Mark as Complete</button>
      ) : null}
    </div>
  );
};

export default DailyPlan;
