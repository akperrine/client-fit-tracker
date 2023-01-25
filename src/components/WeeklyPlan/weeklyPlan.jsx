import "./weeklyPlan.css";
import "../../App.css";
import logoWord from "../../assets/logo-word.png";
import DailyPlan from "./DailyPlan/dailyPlan";
import React from "react";

import { db, updateDb } from "../../utils/firebase.utils";
import { updateDoc, doc } from "firebase/firestore";

import { useSelector, useDispatch } from "react-redux";
import { logout, update } from "../../redux/features/user/userSlice";

const WeeklyPlan = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const username = user.user;
  const weeksWorkouts = user.workout;
  const userId = user.id;

  React.useEffect(() => {
    updateDb("users", userId, "workout", weeksWorkouts);
  }, [user]);

  const handleSignout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  const updateWorkouts = (day) => {
    weeksWorkouts.map((workout) => {
      if (workout.day === day) {
        dispatch(update(workout.day));
      }
    });
  };

  return (
    <div className="client-container">
      <div className="workout-week">
        <nav className="nav">
          <img src={logoWord} className="nav-logo" />
          <button className="logout-btn btn" onClick={handleSignout}>
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
