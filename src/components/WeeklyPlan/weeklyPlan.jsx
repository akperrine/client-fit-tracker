import "./weeklyPlan.css";
import logoWord from "../../assets/logo-word.png";
import DailyPlan from "./DailyPlan/dailyPlan";

const WeeklyPlan = ({ username, weeksWorkouts }) => {
  return (
    <div className="client-container">
      <div className="workout-week">
        <nav className="nav">
          <img src={logoWord} className="nav-logo" />
          <button className="logout-btn btn">Log Out</button>
        </nav>
        <h2 className="welcome-header">Welcome {username}</h2>
        {weeksWorkouts.map((workoutDay) => {
          const arrayLength = workoutDay.workout.length;
          return (
            <DailyPlan arrayLength={arrayLength} workoutDay={workoutDay} />
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyPlan;
