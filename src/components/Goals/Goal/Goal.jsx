import "./Goal.css";

export const Goal = ({ goal, complete, index, handleCompleteClick }) => {
  return (
    <div className="goal-item-container">
      <div className="goal-item">{goal}</div>
      <button
        onClick={() => handleCompleteClick(index)}
        className={
          complete ? "goal-complete-btn-complete" : "goal-complete-btn"
        }
      ></button>
    </div>
  );
};

export default Goal;
