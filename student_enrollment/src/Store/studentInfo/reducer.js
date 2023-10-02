import {UPDATE_DATE, UPDATE_TIME, UPDATE_NAME, UPDATE_AGE} from "./actions.js"
import {updateDate, updateTime, updateName, updateAge} from "./actions.js"

const initState = {
   student_name : (JSON.parse(localStorage.getItem('student'))?.student_name) || null,
   student_age : (JSON.parse(localStorage.getItem('student'))?.student_age) || null,
   slot_date: (JSON.parse(localStorage.getItem('student'))?.slot_date) || null,
   slot_time: (JSON.parse(localStorage.getItem('student'))?.slot_time) || null
}
const reducer = (state=initState, {type, payload}) => {
    const updateLocalStorage = (state) => {
        localStorage.setItem('student', JSON.stringify(state))
    }
    switch (type) {
        case UPDATE_DATE:
            state = {...state, slot_date: payload}
            updateLocalStorage(state)
            return state;
            break;
        case UPDATE_TIME:
            state = {...state, slot_time: payload}
            updateLocalStorage(state)
            return state;
            break;
        case UPDATE_NAME:
            state = {...state, student_name: payload}
            updateLocalStorage(state)
            return state;
            break;
        case UPDATE_AGE:
            state = {...state, student_age: payload}
            updateLocalStorage(state)
            return state;
            break;
        default:
            return state;
            break;
    }
}

export default reducer;