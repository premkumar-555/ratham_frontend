import React, {useEffect} from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatBot/config';
import MessageParser from './chatBot/MessageParser';
import ActionProvider from './chatBot/ActionProvider';
import './styles.css'
const PageTwo = () => {
  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };
   const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
         saveMessages={saveMessages}
         messageHistory={loadMessages()}
      />
    </div>
  )
}

export default PageTwo