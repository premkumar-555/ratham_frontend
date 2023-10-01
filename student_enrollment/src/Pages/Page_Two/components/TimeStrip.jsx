import React, {useState} from 'react'
import { Button, Box, Text} from '@chakra-ui/react'
const TimeStrip = ({times, mode}) => {
    const [timeSelected, settimeSelected] = useState(null)
  return (
    <Box mt="3">
    <Text fontSize="sm" as='b'>{mode}</Text>
    <Box color="#757575" mt="2" width="100%" display='flex' justifyContent="space-between" alignItems="center" >
        {times?.map((ele) => (<Box w='75px' h="35px" display='flex' justifyContent='center' alignItems="center" fontSize="14px" cursor='pointer' fontWeight='600' bg={ele === timeSelected && '#0288D1'} onClick={() => settimeSelected(ele)} key={ele}  size='lg'  boxShadow="lg" borderRadius="md" color={ele === timeSelected && 'white'}>
            {ele}
      </Box>))}
    </Box>
    </Box>
  )
}

export default TimeStrip