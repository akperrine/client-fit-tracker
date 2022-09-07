import "./weeklyPlan.css";
import "../../App.css";
import logoWord from "../../assets/logo-word.png";
import DailyPlan from "./DailyPlan/dailyPlan";

// import {doc, updateDoc}

const WeeklyPlan = ({ username, weeksWorkouts, signOut }) => {
  const updateWorkouts = (day) => {
    weeksWorkouts.map((workout) => {
      if (workout.day === day) {
        console.log("should flip", workout.day, workout.complete);
        return { ...workout, ...(workout.complete = !workout.complete) };
      } else {
        console.log(workout.day, workout.complete);
        return workout;
      }
    });

    //   const docRef = doc(db, "users", strCode);

    //   await updateDoc(docRef, {
    //     workout: workoutArr,
    //   })
    //     .then(() => alert("update successful"))
    //     .catch((err) => alert(`unsucessful, error:${err}`));
    // };
  };
  console.log(weeksWorkouts);

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
