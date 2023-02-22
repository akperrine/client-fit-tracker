import "./App.css";
import React from "react";
import Login from "./components/Login/login";
import { getQuery } from "./utils/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/features/user/userSlice";
import Navigation from "./routes/navigation/navigation";
import { Routes, Route } from "react-router-dom";
import WeeklyPlan from "./components/WeeklyPlan/weeklyPlan";
import TodayView from "./components/TodayView/TodayView";
import Chat from "./components/Chat/Chat";
import { Goals } from "./components/Goals/Goals";

const App = () => {
  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

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
        dispatch(login(users[0]));
      }
      unsubscribe();
    });
  };

  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<TodayView />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/week" element={<WeeklyPlan />} />
          </Route>
        </Routes>
      ) : (
        <Login getUserData={getUserData} />
      )}
    </>
  );
};

export default App;
