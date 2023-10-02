import React from 'react'
import { Link } from "react-router-dom"
import { Box, Text, Button} from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux'
import {updateDate, updateTime, updateName, updateAge} from "../../Store/studentInfo/actions.js"
const PageThree = () => {
  const {student_age, student_name} =useSelector((state) => state);
  const dispatch = useDispatch();
  const clearStoreValues = () => {
  dispatch(updateDate(''))
  dispatch(updateTime(''))
  dispatch(updateName(''))
  dispatch(updateAge(''))
  }
  return (
    <Box>
     <Box h='auto' px={3} py={5} display='flex' justifyContent='left' alignItems='center' bg='#6dd5ed' >
     <Text fontSize='sm' as='b'>Your Name is {student_name} aged {student_age} has been added to student system.
     <br />
     <br />
     You may now exit.
     </Text>
     </Box>
     <Box mt="10" px={3} display='flex' justifyContent='center' alignItems='center' >
      <Link to="/">
     <Button onClick={() => {clearStoreValues()}} fontSize='14px' fontWeight='semibold' size='sm'  colorScheme='red'>Exit Now!</Button>
      </Link>
     </Box>
    </Box>
  )
}

export default PageThree