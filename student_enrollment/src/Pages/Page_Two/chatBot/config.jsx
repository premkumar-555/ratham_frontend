// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from '../components/BotAvatar'
const botName = 'Chat-Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system! `)],
   widgets: [
    // {
    //   widgetName: 'dogPicture',
    //   widgetFunc: (props) => <DogPicture {...props} />,
    // },
  ],
  customComponents: {
    header: () => null,
    input: () => null,
    botAvatar: (props) => <BotAvatar {...props} />,
  },

  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;