import React from 'react';
import {Grid, TextField,TableContainer, Table,TableHead,TableRow,TableCell,TableBody, Button,spacing,Paper } from '@mui/material';
import {IconButton, Tooltip} from '@mui/material';import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {Link} from "react-router-dom";
const List = () => {
    const tableHead = {backgroundColor: 'gray',color: 'white'};
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
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>musab</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>
                        <Tooltip title="Delete">
                            <IconButton>
                                <Link to="/view/1"><VisibilityIcon /></Link>
                            </IconButton>
                        </Tooltip>
                        </TableCell>
                        <TableCell>
                        <Tooltip title="Edit">
                            <IconButton>
                                <Link to="/edit/1"><EditIcon /></Link>
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
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

export default List;