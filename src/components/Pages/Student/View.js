import React, { useEffect, useState } from 'react';
import {Grid, TableContainer, Table,TableHead,TableRow,TableCell,TableBody, Button,spacing,Paper } from '@mui/material';
import {IconButton, Tooltip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link,useParams} from "react-router-dom";

const List = () => {
    const tableHead = {backgroundColor: 'green'};
    const {id} = useParams();
    const linkVal = `http://localhost:3333/students/${id}`;
    
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        fetch(linkVal)
        .then(response => response.json())
        .then(data => setStudents(data))
    },[])
    return (
        <>
        <Grid container  textAlign="center" >
            <Grid item md={12} p={1}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={tableHead}>
                        <TableRow >
                            <TableCell>No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{students.id}</TableCell>
                            <TableCell>{students.stdname}</TableCell>
                            <TableCell>{students.email}</TableCell>
                            <TableCell>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <Link to="/delete/1"><DeleteIcon /></Link>
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            <Grid item md={12} p={1}><Link to="/"><Button type="submit" variant="contained" ><ArrowBackIcon/> Back to Home</Button></Link></Grid>
        </Grid>
        </>
    );
};

export default List;