import {SET_USER} from "../actions/actionType"
const INITIAL_STATE = {
    user:null,
};

//Here, userReducer is a state updater
// Eg:- Like post will increase the like by 1
const userReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case SET_USER:
            return{
                ...state,
                user:action.user,
            };
        default:
            return state;
    }
};

export default userReducer;