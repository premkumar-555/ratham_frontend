import React from 'react'
import { Link } from "react-router-dom"
import { Box, Text, Button} from '@chakra-ui/react'
const PageOne = () => {
  return (
    <Box>
     <Box h='75px' px={3} display='flex' justifyContent='left' alignItems='center' bg='#6dd5ed' >
     <Text fontSize='md' as='b'>Enter into Student Info System</Text>
     </Box>
     <Box mt="10" px={3} display='flex' justifyContent='center' alignItems='center' >
      <Link to="page_two">
     <Button  fontSize='14px' fontWeight='semibold' size='sm' alignItem='center' colorScheme='whatsapp'>Enroll Now!</Button>
      </Link>
     </Box>
    </Box>
  )
}

export default PageOne