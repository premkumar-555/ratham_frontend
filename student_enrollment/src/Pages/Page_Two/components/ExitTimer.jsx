import React, {useEffect, useState, useRef} from 'react'
import { Box, Input, Text, Select } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
const ExitTimer = () => {
const [timer, setTimer] = useState(5);
const timerRef = useRef('');
const navigate = useNavigate()
useEffect(() => {
  timerRef.current = setInterval(() => {
    setTimer((pre) => {
        if(pre === 1){
            clearInterval(timerRef.current);    
            navigate('/page_three')
        }else{
           return (pre - 1)
        }
    })
  }, 1000);

  return () => {
    clearInterval(timerRef.current)
  }
}, [])

  return (
      <>
    {
      timer > 0 && ((<Box w='32px' h='32px' bg='blue' color='white' borderRadius="50%" display='flex' justifyContent='center' alignItems='center'>
            <Text fontSize='md' as='b'>{timer}</Text>
        </Box>)
      )
    }
    </>
  )
}

export default ExitTimer