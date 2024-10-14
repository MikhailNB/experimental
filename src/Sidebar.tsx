// src/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>ChatGPT Clone</h2>
      <button className="new-chat-button">+ New Chat</button>
      <ul className="conversation-list">
        <li>Conversation 1</li>
        <li>Conversation 2</li>
      </ul>
    </div>
  );
};

export default Sidebar;
