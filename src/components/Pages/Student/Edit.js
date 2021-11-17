import React from 'react';

import {Grid,Typography, TextField, Button, spacing } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";

function Edit() {
    const bgColor = {backgroundColor: 'green',color: 'white'};
    return (
        <><Grid container  textAlign="center" >
        <Grid item md={12} p={1}>
            <Typography style={bgColor} variant="h4" mb={2} py={2}>Edit Student
            </Typography>
            {/* Import Form */}
            <form>
                <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="ID" disabled/><br/><br/>
                <TextField autoComplete="std-name" name="std-name" variant="outlined" required fullWidth id="std-name" label="Name"/><br/><br/>
                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email" /><br/><br/>
                <Button type="submit" variant="contained"  fullWidth>Update</Button>
            </form>
        </Grid>
        <Grid item md={12} p={1}><Link to="/"><Button type="submit" variant="contained" ><ArrowBackIcon/> Back to Home</Button></Link></Grid>
        </Grid>
        </>
    )
}

export default Edit
