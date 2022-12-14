import "./App.css";
import React from "react";
import Login from "./components/Login/login";
import WeeklyPlan from "./components/WeeklyPlan/weeklyPlan";
import { getQuery, getSnapshot } from "./utils/firebase.utils";
import { onSnapshot } from "firebase/firestore";

const App = () => {
  const [userData, setUserData] = React.useState([]);
  const [userId, setUserId] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [weeksWorkouts, setWeeksWorkouts] = React.useState([]);

  const getUserData = async (stringInput) => {
    const q = await getQuery("users", "password", stringInput);

    const unsubscribe = onSnapshot(q, (snapshot) => {
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
      unsubscribe();
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
          userData={userData}
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
