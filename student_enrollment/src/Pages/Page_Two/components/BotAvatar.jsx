import React from 'react'
import { Avatar } from '@chakra-ui/react'
import bot from  '../../../assets/icons8-bot-48.png' 
import '../styles.css'
const BotAvatar = () => {
  return (
    <Avatar h='35px' w='35px' name='Dan Abrahmov' src={bot} />
  )
}

export default BotAvatar