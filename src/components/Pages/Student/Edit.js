import React, { useEffect, useState } from 'react';

import {Grid,Typography, TextField, Button, spacing } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link,useNavigate ,useParams} from "react-router-dom";
import axios from 'axios';

function Edit() {
    const bgColor = {backgroundColor: 'green',color: 'white'};
    const tableHead = {backgroundColor: 'green'};

    const {id} = useParams();
    const navigate = useNavigate ();
    const linkVal = `http://localhost:3333/students/${id}`;
    
    const [stdData, setStdData] = useState([]);

    useEffect(()=>{
        fetch(linkVal)
        .then(response => response.json())
        .then(data => setStdData(data))
    },)

    const [student, setStudent] = useState({
        stdname: "",
        email: "",
    });

    const [status, setStatus] = useState()

    function onForm(e){
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
         await axios.put(`http://localhost:3333/students/${id}`, student)
         navigate("/")
        } catch (error) {
         console.log("Something is Wrong");
        }
    }
    // if(status){
    //     window.location.reload(true);
    // } 
    return (
        <>
        <Grid container  textAlign="center" >
            <Grid item md={12} p={1}>
                <Typography style={bgColor} variant="h4" mb={2} py={2}>Edit Student
                </Typography>
                {/* Import Form */}
                <form>
                    <TextField name="id" variant="outlined" required fullWidth id="id" value={id} disabled onChange={(e) => onForm(e)}/><br/><br/>
                    <TextField placeholder={stdData.stdname} name="stdname" variant="outlined" required fullWidth id="stdname"  onChange={(e) => onForm(e)}/><br/><br/>
                    <TextField autoComplete="email" placeholder={stdData.email}  name="email" variant="outlined" required fullWidth id="email" onChange={e => onForm(e)}/><br/><br/>
                    <Button type="submit" onClick={e => onFormSubmit(e)} variant="contained" fullWidth>add</Button>
                </form>
            </Grid>
            <Grid item md={12} p={1}>
                <Link to="/"><Button variant="contained" onClick={() => navigate("/")}><ArrowBackIcon/> Back to Home</Button></Link>
            </Grid>
        </Grid>
        </>
    )
}

export default Edit
