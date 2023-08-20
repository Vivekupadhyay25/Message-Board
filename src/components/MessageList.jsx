// MessageList.js
import React from "react";

const MessageList = ({ messages, onClickDelete }) => {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <>
          {" "}
          <li key={message.id} className="message-item">
            <span className="chat-icon">💬</span>
            <span style={{ fontWeight: "600", fontSize: "18px" }}>
              ~{message.source}
            </span>{" "}
            -{" "}
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
            <button
              className="button delete-button"
              onClick={() => onClickDelete(message.id)}
            >
              Delete
            </button>
          </li>
          <div className="message-text">{message.text}</div>
          {index !== messages.length - 1 && (
            <div className="message-divider"></div>
          )}
        </>
      ))}
    </ul>
  );
};

export default MessageList;
