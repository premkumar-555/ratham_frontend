import React, {useState, useEffect} from 'react'
import { Box, Input, Text} from '@chakra-ui/react'
import {updateName} from "../../../Store/studentInfo/actions.js"
import {useDispatch, useSelector} from 'react-redux'
const NameInput = (props) => {
    const dispatch = useDispatch()
    const {student_name} =useSelector((state) => state);
    const [showNameInput, setshowNameInput] = useState(true);
    const hideContent = () => {
        setTimeout(() => {
            setshowNameInput(false)
        }, 1000);
    }
  return (
    <>
    {showNameInput && (<Box mt="3" m='2' display="flex" w='100%' gap='1' 
    justifyContent='flex-end'
    alignItems='center'>
    <Text bg='#C5E1A5' fontSize='sm' as='b' p="1" borderRadius='md'>Name</Text>
    <Input onChange={(e) => {dispatch(updateName(e.target.value))}} fontSize="14px" fontWeight="500" w='55%' onKeyPress={(e) => {
        if(e.key === 'Enter'){
            props.actions.handleAge(student_name);
            hideContent();
        }
    }} placeholder='Enter name here...' size='sm' borderRadius='md' border='2px solid lightgray'/>
    </Box>)}
    </>
  )
}

export default NameInput