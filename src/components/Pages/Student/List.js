import React, { useEffect, useState } from 'react';
import {TableContainer, Table,TableHead,TableRow,TableCell,TableBody, Button,spacing,Paper } from '@mui/material';
import {IconButton, Tooltip} from '@mui/material';import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Axios from "axios";
import {Link} from "react-router-dom";
const List = () => {
    const tableHead = {backgroundColor: 'gray', color: 'white'};
    
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3333/students')
        .then(response => response.json())
        .then(data => setStudents(data))
    },[])

    
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={tableHead}>
                    <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>View</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student,i) => {
                        return(
                            <TableRow key={i}>
                                <TableCell>{i+1}</TableCell>
                                <TableCell>{student.stdname}</TableCell>
                                <TableCell>{student.email}</TableCell>
                                <TableCell>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <Link to={`/view/${student.id}`}><VisibilityIcon /></Link>
                                    </IconButton>
                                </Tooltip>
                                </TableCell>
                                <TableCell>
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <Link to={`/view/${student.id}`}><EditIcon /></Link>
                                    </IconButton>
                                </Tooltip>
                                </TableCell>
                                <TableCell>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <Link to="/delete/1"><DeleteIcon /></Link>
                                    </IconButton>
                                </Tooltip>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

export default List;