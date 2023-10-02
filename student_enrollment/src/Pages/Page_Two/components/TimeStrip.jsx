import React, {useState} from 'react'
import { Button, Box, Text} from '@chakra-ui/react'
import {updateTime} from '../../../Store/studentInfo/actions.js'
import {useDispatch, useSelector} from 'react-redux'
const TimeStrip = ({times, mode}) => {
    const dispatch = useDispatch();
    const slot_time = useSelector((state) => (state?.slot_time));
  return (
    <Box mt="3">
    <Text fontSize="xs" as='b' color="#5D4037">{mode}</Text>
    <Box color="#757575" mt="2" width="100%" display='flex' justifyContent="space-between" alignItems="center" >
        {times?.map((ele) => (<Box w='75px' h="35px" display='flex' justifyContent='center' alignItems="center" fontSize="14px" cursor='pointer' fontWeight='600' bg={ele === slot_time && '#0288D1'} onClick={() => {
          dispatch(updateTime(ele))
        }} key={ele}  size='lg'  boxShadow="lg" borderRadius="md" color={ele === slot_time && 'white'}>
            {ele}
      </Box>))}
    </Box>
    </Box>
  )
}

export default TimeStrip