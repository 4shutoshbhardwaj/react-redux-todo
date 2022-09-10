import { ADD_USER, DELETE_USER, GET_SINGLE_USER, GET_USERS, UPDATE_USER } from "./actionType";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const getUsers=(users)=>{
    return {
        type:GET_USERS,
        payload:users
    }
}

const userDeleted=()=>{
    return {
        type:DELETE_USER
    }
}

const userAdded=()=>{
    return {
        type:ADD_USER
    }
}

const userUpdated=()=>{
    return {
        type:UPDATE_USER
    }
}

const getUser=(user)=>{
    return {
        type:GET_SINGLE_USER,
        payload:user
    }
}

export const loadUsers=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`)
        .then((res)=>{
            console.log(res.data);
            dispatch(getUsers(res.data))
        })
        .catch((error)=>{console.log(error);})
    }
}

export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>{
            console.log(res.data);
            dispatch(userDeleted())
            dispatch(loadUsers())
        })
        .catch((error)=>{console.log(error);})
    }
}

export const addUser=(user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`, user)
        .then((res)=>{
            console.log(res.data);
            dispatch(userAdded())
            const navigate=useNavigate();
            navigate("/");
        })
        .catch((error)=>{console.log(error);})
    }
}

export const getSingleUser=(id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((res)=>{
            console.log(res.data);
            dispatch(getUser(res.data))
        })
        .catch((error)=>{console.log(error);})
    }
}

export const updateUser=(user,id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user)
        .then((res)=>{
            console.log(res.data);
            dispatch(userUpdated())
        })
        .catch((error)=>{console.log(error);})
    }
}