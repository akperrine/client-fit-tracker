import "./Message.css";

const Message = ({ message }) => {
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
    <div>
      <p>{message.message}</p>
      <h6>{message.username}</h6>
      <div>{standardDate}</div>
    </div>
  );
};

export default Message;
