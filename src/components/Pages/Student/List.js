import React, { useEffect, useState } from 'react';
import {TableContainer, Table,TableHead,TableRow,TableCell,TableBody, Paper } from '@mui/material';
import {IconButton, Tooltip} from '@mui/material';import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom";
import axios from 'axios';
const List = () => {
    const tableHead = {backgroundColor: 'gray', color: 'white'};
    
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        fetch('https://elated-lichterman-659a8d.netlify.app/students')
        .then(response => response.json())
        .then(data => setStudents(data))
    },[])

    const handleDelete = async id => {
        await axios.delete(`http://localhost:3333/students/${id}`);
        const newstudent = students.filter((item) => {
         // console.log(item);
         return item.id !== id;
        })
        setStudents(newstudent);
    }

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
                                <Tooltip title="View">
                                    <IconButton>
                                        <Link to={`/view/${student.id}`}><VisibilityIcon /></Link>
                                    </IconButton>
                                </Tooltip>
                                </TableCell>
                                <TableCell>
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <Link to={`/edit/${student.id}`}><EditIcon /></Link>
                                    </IconButton>
                                </Tooltip>
                                </TableCell>
                                <TableCell>
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => handleDelete(student.id)}>
                                        <DeleteIcon />
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