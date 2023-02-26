import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../../redux/features/user/userSlice";
import Message from "./Message/Message";
import "./Chat.css";
import React from "react";
import { updateDb } from "../../utils/firebase.utils";
import { RxPaperPlane } from "react-icons/rx";

const Chat = () => {
  const inputRef = React.useRef();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const username = user.user;
  const messages = user.messages;
  const userId = user.id;

  React.useEffect(() => {
    updateDb("users", userId, "messages", messages);
  });

  const updateMessages = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    if (inputRef.current.value) {
      const time = String(Math.floor(new Date().getTime() / 1000.0));
      console.log();
      dispatch(
        addMessages({
          username: username,
          message: inputRef.current.value,
          timestamp: time,
        })
      );
    }
  };

  const messageComponents = messages.map((message) =>
    message.username === username ? (
      <Message message={message} messageClassName="user-message-container " />
    ) : (
      <Message message={message} messageClassName="foreign-message-container" />
    )
  );

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-box">{messageComponents}</div>
        <div className="chat-input-container">
          <form onSubmit={updateMessages}>
            <textarea
              type="text"
              ref={inputRef}
              placeholder="type something..."
            />
            <button>
              <RxPaperPlane size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
