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

  const handleName = (slot) => {
    const message  = createClientMessage(slot);
    const botMessage = createChatBotMessage('Enter Your Name', {widget: 'NameInput', delay: 500});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,message, botMessage],
    }));
  };
  
  const handleAge = (name) => {
    const message  = createClientMessage(name);
    const botMessage = createChatBotMessage('Enter Your Age', {widget: 'AgeInput', delay: 500});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,message, botMessage],
    }));
  };
  const handleThankyou = (age) => {
    const message  = createClientMessage(age);
    const botMessage = createChatBotMessage('Thank you!', {widget:'ExitTimer'});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,message, botMessage],
    }));
  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleGotit,
          handleName, handleAge,
          handleThankyou
        },
        });
      })}
    </div>
  );
};

export default ActionProvider;