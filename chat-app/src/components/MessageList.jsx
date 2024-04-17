import React from "react";

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index}>
          <strong>{message.senderId}: </strong>
          {message.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
