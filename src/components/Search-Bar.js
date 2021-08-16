import { Paper, TextField } from '@material-ui/core';
import { useState } from 'react';

function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(e) {
        setSearchTerm(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onFormSubmit(searchTerm);
    }

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={handleChange}></TextField>
            </form>
        </Paper>
    );
}

export default SearchBar;