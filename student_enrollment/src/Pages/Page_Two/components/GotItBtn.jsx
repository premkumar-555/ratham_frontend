import React, {useState} from 'react'
import { Button, Box } from '@chakra-ui/react'
import {
  createChatBotMessage,
  createCustomMessage,
} from 'react-chatbot-kit';
const GotItBtn = (props) => {
    const [showBtn, setshowBtn] = useState(true)
    
    const executeGotIt = () => {
        props.actions.handleGotit();
        setTimeout(() => {
            setshowBtn(false)
        }, 1000);

}
return (
    <Box mb="5px" display='flex' justifyContent='flex-end'>
    { showBtn && <Button onClick={() => {executeGotIt()}}  fontSize='14px' fontWeight='semibold' size='sm' colorScheme='whatsapp'>Got It!</Button>
    }
    </Box>
  )
}

export default GotItBtn