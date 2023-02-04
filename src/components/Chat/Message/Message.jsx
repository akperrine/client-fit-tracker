import "./Message.css";

const Message = ({ message, messageClassName }) => {
  console.log(messageClassName);

  const timestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${month} ${day}, ${hour}:${minute}`;
  };

  const standardDate = timestampToDate(message.timestamp);

  return (
    <div className={messageClassName}>
      <h6>{message.username}</h6>
      <p>{message.message}</p>
      <div className="message-time-stamp">{standardDate}</div>
    </div>
  );
};

export default Message;
