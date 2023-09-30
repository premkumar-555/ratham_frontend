//actions to update store
const UPDATE_DATE = "UPDATE_DATE";
const UPDATE_TIME = "UPDATE_TIME";
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_AGE = "UPDATE_AGE";

// action providers
const updateDate = (payload) => ({type : UPDATE_DATE, payload});
const updateTime = (payload) => ({type : UPDATE_TIME, payload});
const updateName = (payload) => ({type : UPDATE_NAME, payload});
const updateAge = (payload) => ({type : UPDATE_AGE, payload});

export {UPDATE_DATE, UPDATE_TIME, UPDATE_NAME, UPDATE_AGE}
export {updateDate, updateTime, updateName, updateAge}



