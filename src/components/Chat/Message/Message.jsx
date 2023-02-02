import "./Message.css";

const Message = ({ message }) => {
  return (
    <div>
      <p>{message.message}</p>
      <h6>{message.username}</h6>
      <div>{message.timestamp}</div>
    </div>
  );
};

export default Message;
