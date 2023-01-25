import "./dailyPlan.css";
import React from "react";
// import { useDispatch } from "react-redux";

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
  const weekday = weekdayArr[workoutDay.day - 1];

  const handleClick = () => {
    updateWorkouts(workoutDay.day);
  };
  return (
    <div className="weekday-container">
      <h6>{`${weekday}`}</h6>
      {arrayLength > 0 ? (
        workoutDay.workout.map((workout) => (
          <p className="workout-content">{workout.excerpt}</p>
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
