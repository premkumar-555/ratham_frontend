import React from 'react'
import { Box } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { PiStudentDuotone } from 'react-icons/pi'
import { IoExitOutline } from 'react-icons/io5'
const Header = () => {
  return (
    <Box w='100%' h='50px' borderBottom='5px' borderColor="#6dd5ed.200" boxShadow='md'
     display="flex" alignItems="center" justifyContent="space-between" px={3} py={1}>
     <Icon as={PiStudentDuotone} w={8} h={8} color='green.500' />
     <Icon as={IoExitOutline} w={8} h={8} color='green.500' />
    </Box>
  )
}

export default Header