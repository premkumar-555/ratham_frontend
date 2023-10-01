import React from 'react';
import {
  createClientMessage 
} from 'react-chatbot-kit';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
     const handleGotit = () => {
    const message  = createClientMessage('Got It!');
    const botMessage = createChatBotMessage('Pick a slot', {widget: 'dateStrip', delay: 500});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, botMessage],
    }));
  };
  const handleDateSelect = () => {
    const botMessage = createChatBotMessage('Pick a slot', {widget: 'TimeStrip', delay: 500});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleGotit},
        });
      })}
    </div>
  );
};

export default ActionProvider;