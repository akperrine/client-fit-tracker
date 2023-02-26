import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Goal from "./Goal/Goal";
import { updateDb } from "../../utils/firebase.utils";

import { updateGoalComplete } from "../../redux/features/user/userSlice";
import "./Goals.css";

export const Goals = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const userId = user.id;
  const goalList = user.goals;

  const handleCompleteClick = (index) => {
    dispatch(updateGoalComplete(index));
  };

  useEffect(() => {
    updateDb("users", userId, "goals", goalList);
  });

  return (
    <div className="app-container">
      <h2 className="goal-header">Current Goals</h2>
      <div className="goal-container">
        <ul>
          {goalList.map((goal, index) => (
            <Goal
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
