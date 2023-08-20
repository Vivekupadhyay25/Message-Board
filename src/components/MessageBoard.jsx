import React, { useEffect, useState } from "react";
import getMessages from "../services/getMessages";
import postMessage from "../services/postMessage";
import deleteMessage from "../services/deleteMessage";
import MessageList from "./MessageList";

const MessageBoard = () => {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const messageArray = await getMessages();
    const sortedMessages = [...messageArray]; // Create a copy to avoid modifying the original
    sortedMessages.sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return ascendingOrder ? dateA - dateB : dateB - dateA;
    });
    setMessages(sortedMessages);
  }

  async function postNewMessage() {
    if (messageText.trim() !== "") {
      await postMessage(messageText);
      setMessageText("");
      fetchMessages();
    }
  }

  async function onClickDelete(id) {
    if (window.confirm("Are you sure you want to delete this message?")) {
      await deleteMessage(id);
      fetchMessages();
    }
  }

  async function deleteAllMessages() {
    if (window.confirm("Are you sure you want to delete all messages?")) {
      for (const message of messages) {
        await deleteMessage(message.id);
      }
      fetchMessages(); // Refresh the message list after deleting all
    }
  }

  function toggleSortOrder() {
    setAscendingOrder(!ascendingOrder);
    fetchMessages();
  }

  return (
    <div className="message-board-container">
      <h1> Message Board </h1>

      <h3 className="info-text">
        Type something in the box below, then hit "Post" to see the magic
      </h3>
      <div className="messageText">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
        <button className="button post-button" onClick={postNewMessage}>
          Post!
        </button>
        <button
          className="button delete-all-button"
          onClick={deleteAllMessages}
        >
          Delete All
        </button>
        <button className="button sort-button" onClick={toggleSortOrder}>
          {ascendingOrder ? "Oldest First" : "Newest First"}
        </button>
      </div>
      <div>
        {messages.length === 0 ? (
          <p className="no-messages-text">
            Sad! No messages available. Hit some post!!!!
          </p>
        ) : (
          <MessageList messages={messages} onClickDelete={onClickDelete} />
        )}
      </div>
    </div>
  );
};

export default MessageBoard;
