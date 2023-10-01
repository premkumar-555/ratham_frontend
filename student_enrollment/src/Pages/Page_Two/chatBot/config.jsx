// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../components/BotAvatar'
import GotItBtn from '../components/GotItBtn'
import DateStrip from '../components/DateStrip'
import TimeStrip from '../components/TimeStrip'
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
      widgetName: 'dateStrip',
      widgetFunc: (props) => <DateStrip {...props} />,
    },
    {
      widgetName: 'TimeStrip',
      widgetFunc: (props) => <DateStrip {...props} />,
    },
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