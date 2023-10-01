// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../components/BotAvatar'
import GotItBtn from '../components/GotItBtn'
const botName = 'Chat-Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system! `,
  {
        widget: "gotItBtn",
      })],
   widgets: [
    {
      widgetName: 'gotItBtn',
      widgetFunc: (props) => <GotItBtn {...props} />,
    },
    {
      widgetName: 'gotItBtn',
      widgetFunc: (props) => <GotItBtn {...props} />,
    }
  ],
  customComponents: {
    header: () => null,
    // input: () => null,
    botAvatar: (props) => <BotAvatar {...props} />,
  },

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#B3E5FC',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;