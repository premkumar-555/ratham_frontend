import React, {useState, useEffect} from 'react'
import { Box, Input, Text, Select } from '@chakra-ui/react'
import {updateAge} from "../../../Store/studentInfo/actions.js"
import {useDispatch, useSelector} from 'react-redux'
const AgeInput = (props) => {
    const dispatch = useDispatch()
    const age =useSelector((state) => state.student_age);
    const [showAgeSelect, setshowAgeSelect] = useState(true);
    const hideContent = (e) => {
        if(e.key === 'Enter'){
            setTimeout(() => {
                setshowAgeSelect(false)
                props?.actions?.handleThankyou(age)
            }, 1000);
        }
    }
  return (
    <>
    {showAgeSelect && (<Box mt="3" display="flex" w='100%' gap='2' 
    justifyContent='flex-end'
    alignItems='center'>
    <Text bg='#C5E1A5' fontSize='sm' as='b' p="1" borderRadius='md'>Age</Text>
    <Select onKeyPress={(e) => {hideContent(e)}} onChange={(e) => {dispatch(updateAge(e.target.value))}} fontSize="14px" fontWeight="600" w="26%" placeholder='Select' size='sm' borderRadius='md' border="2px solid lightgray">
        {new Array(40).fill('').map((ele, ind) => {
            if(ind + 1 >= 18 && ind+1 <= 40){
                return <option key={ind}  value={ind + 1}>{ind+1}</option>
            }
        })}
    </Select>
    </Box>)}
    </>
  )
}

export default AgeInput