// src/ChatWindow.tsx
import React from 'react';
import Message from './Message';
import './ChatWindow.css';

const ChatWindow: React.FC = () => {
  // Sample messages
  const messages = [
    { sender: 'ai', text: 'Hello! How can I assist you today?' },
    { sender: 'user', text: 'Tell me a joke.' },
    { sender: 'ai', text: 'Why did the programmer quit his job? Because he didn\'t get arrays.' },
  ];

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender as 'user' | 'ai'} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatWindow;
