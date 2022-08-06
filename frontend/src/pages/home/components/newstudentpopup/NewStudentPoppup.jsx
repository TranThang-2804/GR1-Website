import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NewStudentPoppup(props) {
    return(
        <Popover 
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        >
        The content of the Popover.
        </Popover>
    )
}

export default NewStudentPoppup;