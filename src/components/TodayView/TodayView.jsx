import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateWorkout } from "../../redux/features/user/userSlice";
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
  const [daysComplete, setDaysComplete] = useState(0);
  const [daysProgrammed, setDaysProgrammed] = useState(0);
  const [percentComplete, setPercentComplete] = useState(0);

  const username = user.user;
  const weeksWorkouts = user.workout;
  const userId = user.id;
  const dateIndex = new Date().getDay();

  const getCurrentDay = () => {
    for (let i = 0; i < 7; i++) {
      if (i === dateIndex) {
        return weeksWorkouts[i];
      }
    }
  };

  console.log(weeksWorkouts);
  const calcPercentComplete = () => {
    let counterComplete = 0;
    let counterDaysProgrammed = 0;
    for (let i = 0; i < 7; i++) {
      if (weeksWorkouts[i].workout.length) {
        counterDaysProgrammed++;
        if (weeksWorkouts[i].complete) {
          counterComplete++;
        }
      }
    }
    setDaysComplete(counterComplete);
    setDaysProgrammed(counterDaysProgrammed);
    const rounded = Math.round((counterComplete / counterDaysProgrammed) * 100);
    setPercentComplete(rounded);
  };

  useEffect(() => {
    calcPercentComplete();
  }, [daysComplete]);

  const currentDay = getCurrentDay();
  const weekday = weekdayArr[currentDay.day - 1];

  useEffect(() => {
    updateDb("users", userId, "workout", weeksWorkouts);
  }, [user]);

  const updateWorkouts = () => {
    dispatch(updateWorkout(currentDay.day));
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
            {currentDay.workout.length === 0 ? (
              <div className="no-workout">No Workout Programmed</div>
            ) : (
              <ul>
                {currentDay.workout.map((item) => (
                  <li>{item["excerpt"]}</li>
                ))}
              </ul>
            )}
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
          <div className="completion-container">
            <h6>This Week's Progress</h6>
            <div className="completion-bar-empty">
              <div
                className="completion-bar-full"
                style={{
                  width: `${percentComplete}%`,
                  backgroundColor: `${percentComplete < 60}`
                    ? "rgb(235, 206, 23)"
                    : "rgb(56, 173, 32)",
                }}
              ></div>
              <span className="completion-percent">{percentComplete}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayView;
