import React, {useState, useEffect} from 'react'
import { Button, Box, IconButton} from '@chakra-ui/react'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import TimeStrip from './TimeStrip'
import {useDispatch, useSelector} from 'react-redux'
import {updateDate} from "../../../Store/studentInfo/actions.js"
import '../styles.css'
const DateStrip = (props) => {
    const [dates, setdates] = useState([{date: "5 MAY", day: "THU"}, {date: "6 MAY", day: "FRI"}, {date: "7 MAY", day: "SAT"}]);
    const [timesMorn, settimesMorn] = useState(["9 AM", "10 AM", "11 AM", "12 PM"])
    const [timesAfternoon, settimesAfternoon] = useState(["1 PM", "2 PM", "3 PM", "4 PM"])
    const [timesEvn, settimesEvn] = useState(["6 PM", "7 PM", "8 PM", "9 PM"])
    const [selectedDate, setselectedDate] = useState(null)
    const [showTime, setshowTime] = useState(false)
    const dispatch = useDispatch();
    const {slot_time, slot_date} = useSelector((state) => (state));
    const [showStrips, setshowStrips] = useState(true)

    useEffect(() => {
       let id;
       if(slot_time){
        id = setTimeout(() => {
        setshowStrips(false);
        props?.actions?.handleName(`${slot_date} ${slot_time}`)
      }, 1000);
       }
    
      return () => {
        clearTimeout(id)
      }
    }, [slot_time])
    
  return (
    <>
    {showStrips && (<>
    <div className="date-container">
        <IconButton size='xs'
  variant='outline'
  bg='#E0E0E0'
  aria-label='Call Sage'
  fontSize='15px'
  icon={<MdKeyboardArrowLeft size="md"/>}
  isRound={true}
/>
        <div className="date-slots">
            {dates.length === 3 && dates.map((ele, ind) => (
                <Box onClick={() => {setselectedDate(ele?.date);
                  dispatch(updateDate(`${ele?.date}, ${ele?.day}`))
                !showTime && setshowTime(true)}} cursor="pointer" key={ind} className="date-slot" boxShadow='sm'  rounded='xl' bg={selectedDate === ele?.date ? '#0288D1' : 'white'}
                color={selectedDate === ele?.date ? 'white' : 'black'}
                border={selectedDate === ele?.date && 'none'}>
                <span>{ele.date}</span>
                <span>{ele.day}</span>
                </Box>
            ))}
        </div>
        <IconButton size='xs'
  variant='outline'
  bg='#E0E0E0'
  aria-label='Call Sage'
  fontSize='15px'
  icon={<MdKeyboardArrowRight size="md"/>}
  isRound={true}
/>
    </div>
    {showTime && <>
    <TimeStrip times={timesMorn} mode="MORNING"/>
    <TimeStrip times={timesAfternoon} mode="NOON"/>
    <TimeStrip times={timesEvn} mode="EVENING"/>
    </>}
    </>)}
    </>
  )
}

export default DateStrip