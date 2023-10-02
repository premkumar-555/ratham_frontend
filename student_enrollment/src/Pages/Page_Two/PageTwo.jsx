import React, {useEffect, useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './chatBot/config';
import MessageParser from './chatBot/MessageParser';
import ActionProvider from './chatBot/ActionProvider';
import {Box} from '@chakra-ui/react'
import Lottie from 'react-lottie';
import animationData from "../../assets/animation_ln8vggv8.json"
import './styles.css'
const PageTwo = () => {
  const [showLoader, setshowLoader] = useState(true);
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };
   const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };
  useEffect(() => {
    let id = setTimeout(() => {
      setshowLoader(false)
    }, 3000);
  
    return () => {
      clearTimeout(id)
    }
  }, [])
  
  return (
    <div>
      {showLoader ? (<Box w='100%' display='flex' justifyContent="flex-start" alignItems='center'>
        <Box ml='5' mt='3'>
          <Lottie options={defaultOptions} height={70} width={70}/>
        </Box>
      </Box>) : (<Box mt='5'>
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
         saveMessages={saveMessages}
         messageHistory={loadMessages()}
      />
      </Box>)}
      
    </div>
  )
}

export default PageTwo