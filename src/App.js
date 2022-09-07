import "./App.css";
import React from "react";
import Login from "./components/Login/login";
import WeeklyPlan from "./components/WeeklyPlan/weeklyPlan";
// Firebase
import { app, db } from "./utils/firebase.utils";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const App = () => {
  const [userData, setUserData] = React.useState([]);
  const [userId, setUserId] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [weeksWorkouts, setWeeksWorkouts] = React.useState([]);

  console.log(userData, userId);

  const getUserData = async (stringInput) => {
    const q = query(
      collection(db, "users"),
      where("password", "==", stringInput)
    );

    onSnapshot(q, (snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      if (users.length === 0) {
        alert("invalid password");
      } else {
        setUserData(users[0]);
        setUsername(users[0].user);
        setWeeksWorkouts(users[0].workout);
        setUserId(users[0].id);
      }
    });
  };

  const signOut = (e) => {
    e.preventDefault();
    setUsername("");
    setUserData([]);
  };

  return (
    <div className="app-container">
      {username ? (
        <WeeklyPlan
          username={username}
          weeksWorkouts={weeksWorkouts}
          userId={userId}
          signOut={signOut}
        />
      ) : (
        <Login getUserData={getUserData} />
      )}
    </div>
  );
};

export default App;
