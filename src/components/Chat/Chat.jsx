import { useDispatch, useSelector } from "react-redux";
import Message from "./Message/Message";
import "./Chat.css";
import React from "react";
import { updateDb } from "../../utils/firebase.utils";

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const username = user.user;
  const messages = user.messages;
  const userId = user.id;

  //   React.useEffect(() => {
  //     updateDb("users", userId, "messages", messages);
  //   });

  //   const updateMessages = ()

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message) => (
            <Message message={message} />
          ))}
        </div>
        <div className="message-contianer">
          <input />
        </div>
      </div>
    </div>
  );
};

export default Chat;
