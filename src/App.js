import "./App.css";
import React from "react";
import Login from "./components/Login/login";
import WeeklyPlan from "./components/WeeklyPlan/weeklyPlan";
// Firebase
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBYwcfG5kErnzPDeDOjtIlE-g698jwltVM",
  authDomain: "fitness-app-1e36b.firebaseapp.com",
  projectId: "fitness-app-1e36b",
  storageBucket: "fitness-app-1e36b.appspot.com",
  messagingSenderId: "604488646893",
  appId: "1:604488646893:web:521903a0c8db441b9a4ce4",
  measurementId: "G-MG7P82E8BV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//

const App = () => {
  const [userData, setUserData] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [weeksWorkouts, setWeeksWorkouts] = React.useState([]);
  // console.log(username, weeksWorkouts);

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
      console.log(users);

      if (users.length === 0) {
        alert("invalid password");
      } else {
        setUserData(users[0]);
        setUsername(users[0].user);
        setWeeksWorkouts(users[0].workout);
      }
    });
  };

  return (
    <div>
      {username ? (
        <WeeklyPlan username={username} weeksWorkouts={weeksWorkouts} />
      ) : (
        <Login getUserData={getUserData} />
      )}
    </div>
  );
};

export default App;
