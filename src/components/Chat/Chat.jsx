import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../../redux/features/user/userSlice";
import Message from "./Message/Message";
import "./Chat.css";
import React from "react";
import { updateDb } from "../../utils/firebase.utils";

const Chat = () => {
  const inputRef = React.useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const username = user.user;
  const messages = user.messages;
  const userId = user.id;
  console.log("user", user);

  // React.useEffect(() => {
  //   updateDb("users", userId, "messages", messages);
  // });

  const updateMessages = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    const time = String(Math.floor(new Date().getTime() / 1000.0));
    console.log();
    dispatch(
      addMessages({
        username: username,
        message: inputRef.current.value,
        timestamp: time,
      })
    );
  };

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   setInputField(event.target.value);
  // };

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message) => (
            <Message message={message} />
          ))}
        </div>
        <div className="message-contianer">
          <form onSubmit={updateMessages}>
            <input type="text" ref={inputRef} placeholder="type something..." />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
