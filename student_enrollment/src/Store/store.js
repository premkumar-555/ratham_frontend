import { createStore } from "redux";
import studentReducer from './studentInfo/reducer';

const store = createStore(studentReducer);

export default store;
