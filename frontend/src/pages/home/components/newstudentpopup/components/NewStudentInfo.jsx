import { Typography } from "@mui/material";
import * as React from 'react';
import {Grid, Box} from "@mui/material";

function NewStudentInfo(props) {
    const newStudent = {
        id : number,
        firstName : string,
        lastName : string | null,
        address : string |null,
        dob : Date,
        highSchool : string,
        mathScore : number,
        literatureScore : number,
        englishScore : number
    }
    return(
        <Box sx={{}}>
           <Grid container sx={{}}>

            </Grid> 
        </Box>
    );
}

export default NewStudentInfo;