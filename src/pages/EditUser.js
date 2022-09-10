import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate,useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/actions';

function EditUser() {

    const [state, setState] = useState({
        TODO:""
    })

    const [error,setError]=useState("");

    const {id}=useParams();

    const {user}=useSelector(state=>state.data);

    const navigate=useNavigate();

    const dispatch=useDispatch();

    const { TODO } = state;

    useEffect(()=>{
        dispatch(getSingleUser(id))
    },[])
    
    useEffect(()=>{
        if(user){
            setState({...user});
        }
    },[user])

    const handleInputChange=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(TODO===""){
            setError("Please fill all input feilds");
        }else{
            dispatch(updateUser(state,id));
            navigate('/');
            setError("");
        }
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"50px"}}>
            <Button variant='contained' color='error' onClick={()=>navigate("/")}>Go back</Button>
            <h2>Edit TODO</h2>
            <form action="" style={{display:"flex", flexDirection:"column", width:"50%"}} onSubmit={handleSubmit}>
                <TextField id="filled-basic" label="Name" variant="filled" value={TODO||""} type='text' name='TODO' onChange={handleInputChange}/>
                {/* <br />
                <br />
                <TextField id="filled-basic" label="Email" variant="filled" value={email||""} type='email' name='email' onChange={handleInputChange}/>
                <br />
                <br />
                <TextField id="filled-basic" label="Contact" variant="filled" value={contact||""} type='tel' name='contact' onChange={handleInputChange}/>
                <br />
                <br />
                <TextField id="filled-basic" label="Address" variant="filled" value={address||""} type='text' name='address' onChange={handleInputChange}/> */}
                <br />
                <br />
                {error?<h3 style={{color:"red"}}>{error}</h3>:""}
                <Button variant='contained' color='primary' type='submit'>Update</Button>
            </form>
        </div>
    )
}

export default EditUser
