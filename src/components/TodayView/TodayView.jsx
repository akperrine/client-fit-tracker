import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/features/user/userSlice";
import { updateDb } from "../../utils/firebase.utils";
import "./TodayView.css";

const weekdayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TodayView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const username = user.user;
  const weeksWorkouts = user.workout;
  const userId = user.id;
  const dateIndex = new Date().getDay();
  const getCurrentDay = () => {
    for (let i = 0; i < 6; i++) {
      if (i === dateIndex) {
        return weeksWorkouts[i];
      }
    }
  };
  const currentDay = getCurrentDay();
  const weekday = weekdayArr[currentDay.day - 1];

  React.useEffect(() => {
    updateDb("users", userId, "workout", weeksWorkouts);
  }, [user]);

  const updateWorkouts = () => {
    dispatch(update(currentDay.day));
  };

  const handleClick = (event) => {
    event.preventDefault();
    updateWorkouts();
  };

  return (
    <div className="app-container">
      <h2 className="welcome-header">Welcome {username}</h2>
      <div>
        <div>
          <div className="day-plan-container">
            <h6>Workout For {weekday}</h6>
            <ul>
              {currentDay.workout.map((item) => (
                <li>{item["excerpt"]}</li>
              ))}
            </ul>
            {currentDay.workout.length > 0 ? (
              <button
                className={
                  currentDay.complete
                    ? "day-workout-btn-complete"
                    : "btn day-workout-btn"
                }
                onClick={handleClick}
              >
                {currentDay.complete ? "Completed" : "Mark as Complete"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayView;
