import React from 'react';

import {TextField, Button, spacing } from '@mui/material';
const Add = () => {
    return (
        <>
            <form>
                <TextField autoComplete="std-name" name="std-name" variant="outlined" required fullWidth id="std-name" label="Name"/><br/><br/>
                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email" /><br/><br/>
                <Button type="submit" variant="contained"  fullWidth>add</Button>
            </form>
        </>
    );
};
export default Add;