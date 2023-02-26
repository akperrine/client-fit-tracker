import "./Goal.css";
import { useDispatch } from "react-redux";
import { removeGoal } from "../../../redux/features/user/userSlice";

export const Goal = ({ id, goal, complete, index, handleCompleteClick }) => {
  const dispatch = useDispatch();
  const handleRemoveGoalClick = () => {
    dispatch(removeGoal(id));
  };

  return (
    <div className="goal-item-container">
      <div className="goal-item">{goal}</div>
      <button
        onClick={() => handleCompleteClick(index)}
        className={
          complete ? "goal-complete-btn-complete" : "goal-complete-btn"
        }
      ></button>
      <button onClick={handleRemoveGoalClick}>x</button>
    </div>
  );
};

export default Goal;
