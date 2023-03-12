import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Goal from "./Goal/Goal";
import { updateDb } from "../../utils/firebase.utils";

import {
  addGoal,
  updateGoalComplete,
} from "../../redux/features/user/userSlice";
import "./Goals.css";

export const Goals = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const goalList = user.goals;
  const userId = user.id;

  const handleCompleteClick = (index) => {
    dispatch(updateGoalComplete(index));
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    dispatch(addGoal(inputRef.current.value));
    inputRef.current.value = "";
  };

  useEffect(() => {
    updateDb("users", userId, "goals", goalList);
  }, [user]);

  return (
    <div className="app-container">
      <h2 className="goal-header">Current Goals</h2>
      <form onSubmit={handleInputSubmit}>
        <input type="text" placeholder="Add a goal" ref={inputRef} />
      </form>
      <div className="goal-container">
        <ul>
          {goalList.map((goal, index) => (
            <Goal
              key={goal.id}
              id={goal.id}
              index={index}
              goal={goal.goal}
              complete={goal.complete}
              handleCompleteClick={handleCompleteClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
