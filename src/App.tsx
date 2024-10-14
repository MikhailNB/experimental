// src/App.tsx
import React from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import InputArea from './InputArea';
import './App.css';
import ExpandableButton from './ExpandableButton';

const App: React.FC = () => {
  return (
    <div className="app-container">
       <ExpandableButton />
      <Sidebar />
      <div className="main">
        <ChatWindow />
        <InputArea />
      </div>
    </div>
  );
};

export default App;
