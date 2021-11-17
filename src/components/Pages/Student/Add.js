import React, { useState } from 'react';

import {TextField, Button, spacing } from '@mui/material';
import axios from 'axios';
const Add = () => {

    const [student, setStudent] = useState({
        stdname: "",
        email: "",
    });

    function onForm(e){
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault()
        try{
            await axios.post(`http://localhost:3333/students`, student)
        }
        catch(error){
            console.log("Something is Wrong");
        }
    }

    console.log(student);

    return (
        <>
            <form>
                <TextField autoComplete="stdname" name="stdname" variant="outlined" required fullWidth id="stdname" label="Name" onChange={e => onForm(e)}/><br/><br/>
                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email" onChange={e => onForm(e)} /><br/><br/>
                <Button type="submit" variant="contained"  fullWidth onClick={e => onFormSubmit(e)}>add</Button>
            </form>
        </>
    );
};
export default Add;