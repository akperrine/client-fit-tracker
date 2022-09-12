import "./weeklyPlan.css";
import "../../App.css";
import logoWord from "../../assets/logo-word.png";
import DailyPlan from "./DailyPlan/dailyPlan";

import { db, updateDb } from "../../utils/firebase.utils";
import { updateDoc, doc } from "firebase/firestore";

const WeeklyPlan = ({ userData, username, signOut, userId, weeksWorkouts }) => {
  const updateWorkouts = async (day) => {
    weeksWorkouts.map((workout) => {
      if (workout.day === day) {
        return { ...workout, ...(workout.complete = !workout.complete) };
      } else {
        return workout;
      }
    });

    updateDb("users", userId, "workout", weeksWorkouts);
  };

  return (
    <div className="client-container">
      <div className="workout-week">
        <nav className="nav">
          <img src={logoWord} className="nav-logo" />
          <button className="logout-btn btn" onClick={signOut}>
            Log Out
          </button>
        </nav>
        <h2 className="welcome-header">Welcome {username}</h2>
        <div className="week-schedule-container">
          {weeksWorkouts.map((workoutDay, index) => {
            const arrayLength = workoutDay.workout.length;
            return (
              <DailyPlan
                arrayLength={arrayLength}
                workoutDay={workoutDay}
                updateWorkouts={updateWorkouts}
                key={workoutDay.day}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlan;
