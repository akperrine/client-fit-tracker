import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch;
  const user = useSelector((state) => state.user.value);
  const username = user.user;
  const weeksWorkouts = user.workout;
  const userId = user.id;
  const dateIndex = new Date().getDay();
  const getCurrentDay = () => {
    for (let i = 0; i < 6; i++) {
      if (i === dateIndex) {
        console.log(weeksWorkouts[i]);
        return weeksWorkouts[i];
      }
    }
  };
  const currentDay = getCurrentDay();
  const weekday = weekdayArr[currentDay.day - 1];

  console.log(currentDay.workout.length > 0);
  return (
    <div className="app-container">
      <h2 className="welcome-header">Welcome {username}</h2>
      <div>
        <div>
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
                  ? "workout-btn-complete"
                  : "btn day-workout-btn"
              }
            >
              {currentDay.complete ? "Completed" : "Mark as Complete"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TodayView;
