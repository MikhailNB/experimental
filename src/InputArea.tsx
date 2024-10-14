// src/InputArea.tsx
import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import ExpandableButton from './ExpandableButton';
import './InputArea.css';

const InputArea: React.FC = () => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      console.log('Sending message:', input);
      setInput('');
    }
  };

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Send a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <ExpandableButton /> {/* Place the expandable button next to the send button */}
      <button onClick={handleSend} className="send-button">
        <AiOutlineSend size={24} />
      </button>
    </div>
  );
};

export default InputArea;
