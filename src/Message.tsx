// src/Message.tsx
import React from 'react';
import './Message.css';

interface MessageProps {
  sender: 'user' | 'ai';
  text: string;
}

const Message: React.FC<MessageProps> = ({ sender, text }) => {
  return (
    <div className={`message ${sender}`}>
      <div className="message-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
