import "./dailyPlan.css";
import React from "react";

const weekdayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DailyPlan = ({ arrayLength, workoutDay, updateWorkouts }) => {
  const [isComplete, setIsComplete] = React.useState(workoutDay.complete);
  const weekday = weekdayArr[workoutDay.day - 1];

  const handleClick = () => {
    updateWorkouts(workoutDay.day);
    setIsComplete(workoutDay.complete);
  };
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
        <button
          className={
            workoutDay.complete ? "workout-btn-complete" : "btn workout-btn"
          }
          onClick={handleClick}
        >
          {workoutDay.complete ? "Completed" : "Mark as Complete"}
        </button>
      ) : null}
    </div>
  );
};

export default DailyPlan;
