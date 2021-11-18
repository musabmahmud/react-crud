import * as React from 'react';
import ReactDOM from 'react-dom';
import {Typography, Box, makeStyles, Grid, TextField,TableContainer, Table,TableHead,TableRow,TableCell,TableBody, Button,spacing,Paper } from '@mui/material';
import {red, green, orange} from '@mui/material/colors';
//my external file
import Form from "./Student/Add";
import List from "./Student/List";
const Home = () => {
    const header = {backgroundColor: 'purple',color: 'white'};
    const bodyLeft = {backgroundColor: 'green',color: 'white'};
    const bodyRight = {backgroundColor: 'goldenrod',color: 'white'};
    return (
        <>
            <Box textAlign="center" style={header}>
                <Typography variant="h2" py={2}>
                    React Crud with API
                </Typography>
            </Box>
            <Grid container  textAlign="center" >
                <Grid item md={5} p={1}>
                    <Typography style={bodyLeft} variant="h4" mb={2} py={2}>Add Student
                    </Typography>
                    {/* Import Form */}
                    <Form/>
                </Grid>
                <Grid item md={7} p={1}>
                    <Typography style={bodyRight} variant="h4" py={2} mb={2}>Student Info
                    </Typography>
                    {/* Import List */}
                    <List/>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;