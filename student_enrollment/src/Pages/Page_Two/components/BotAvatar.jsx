import React from 'react'
import { Avatar } from '@chakra-ui/react'
import bot from  '../../../assets/icons8-bot-48.png' 
const BotAvatar = () => {
  return (
    <Avatar size={'md'} name='Dan Abrahmov' src={bot} />
  )
}

export default BotAvatar