import { GET_USERS,DELETE_USER, ADD_USER, GET_SINGLE_USER, UPDATE_USER } from "./actionType";


const initState={
    users:[],
    user:{},
    loading:true
}

export const usersReducer=(state=initState,action)=>{
    switch (action.type) {
        case GET_USERS:return {
            ...state,
            users:action.payload,
            loading:false
        }
        case DELETE_USER:
        case ADD_USER:
        case UPDATE_USER:
            return {
            ...state,
            loading:false
        }
        case GET_SINGLE_USER:return{
            ...state,
            user:action.payload,
            loading:false
        }
        default: return state;
    }
}