import React, {useEffect} from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatBot/config';
import MessageParser from './chatBot/MessageParser';
import ActionProvider from './chatBot/ActionProvider';
import './styles.css'
const PageTwo = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        disableScrollToBottom
      />
    </div>
  )
}

export default PageTwo