// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../components/DogPicture.jsx'
const botName = 'Chat-Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
   widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customComponents: {
    header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
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