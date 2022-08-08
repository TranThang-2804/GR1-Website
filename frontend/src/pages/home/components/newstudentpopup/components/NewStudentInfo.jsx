import * as React from 'react';
import {Grid, Box, Typography, Divider, Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const typoFont = {
  fontFamily: "san-arif",
}

const fieldTypoStyle = {
  ...typoFont,
  color: "rgb(136, 136, 136)",
  fontSize: 16,
  fontWeight: "bold"
}

const valueTypoStyle = {
  ...typoFont,
  color: "black",
  fontSize: 16,
  fontWeight: "medium"
}

const rowStyle = {
  my: 1
}


function NewStudentInfo(props) {

    const newStudent = {
        id : null,
        firstName : null,
        lastName : null,
        address : null,
        dob: null,
        highSchool : null,
        mathScore : null,
        literatureScore : null,
        englishScore : null
    }
    
    const resetValue = () => {
        setId(null);
        setFirstName(null);
        setLastName(null);
        setDob(null);
        setHighSchool(null);
        setMathScore(null);
        setLiteratureScore(null);
        setEnglishScore(null);
    }

    const [id, setId] = React.useState(null);
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [dob, setDob] = React.useState(null);
    const [highSchool, setHighSchool] = React.useState(null);
    const [mathScore, setMathScore] = React.useState(null);
    const [literatureScore, setLiteratureScore] = React.useState(null);
    const [englishScore, setEnglishScore] = React.useState(null);

    const closePopup = props.handleClose;

    const handleOnChange = (event, setFunction) => {
        setFunction(event.target.value);
    }

    const handleCancel = () => {
        resetValue();
        closePopup();
        console.log(props.open)
    }

    const handleConfirm = () => {
        closePopup();
    }

    React.useEffect(() => {
    }, [id, lastName, dob, highSchool, mathScore, literatureScore, englishScore]);

    return(
        <Box sx={{}}>
           <Grid container sx={{}}>
                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>Student ID</Typography>
                </Grid>
                <Grid item xs={6}>                  
                    <TextField
                            id="student-id"
                            placeholder="Student ID*"
                            helperText=""
                            value={id}
                            onChange={(event) => {
                                handleOnChange(event, setId); 
                                newStudent.id = event.target.value;
                            }}
                        />
                </Grid>
                </Grid>

                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>First Name</Typography>
                </Grid>
                <Grid item xs={6}>                     
                    <TextField
                            id="first-name"
                            placeholder="First Name*"
                            helperText=""
                            value={firstName}
                            onChange={(event) => {
                                handleOnChange(event, setFirstName); 
                                newStudent.firstName = event.target.value;
                            }}
                        />
                </Grid>
                </Grid>
                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>Last Name</Typography>
                </Grid>
                <Grid item xs={6}>                   
                    <TextField
                            id="last-name"
                            placeholder="Last Name*"
                            helperText=""
                            value={lastName}
                            onChange={(event) => {
                                handleOnChange(event, setLastName); 
                                newStudent.lastName = event.target.value;
                            }}
                        />
                </Grid>
                </Grid>

                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>DOB</Typography>
                </Grid>
                <Grid item xs={6}>                      
                    <TextField
                            id="date-of-birth"
                            placeholder="Date of birth*"
                            helperText=""
                            value={dob}
                            onChange={(event) => {
                                handleOnChange(event, setDob); 
                                newStudent.dob = event.target.value;
                            }}
                    />
                </Grid>    
                </Grid>

                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>High School</Typography>
                </Grid>
                <Grid item xs={6}>  
                    <TextField
                            id="High-School"
                            placeholder="High School*"
                            helperText=""
                            value={highSchool}
                            onChange={(event) => {
                                handleOnChange(event, setHighSchool); 
                                newStudent.highSchool = event.target.value;
                            }}
                        />
                </Grid> 
                </Grid>

                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>Math Score</Typography>
                </Grid>
                <Grid item xs={6}>         
                    <TextField
                            id="math-score"
                            placeholder="Math Score*"
                            helperText=""
                            value={mathScore}
                            onChange={(event) => {
                                handleOnChange(event, setMathScore); 
                                newStudent.mathScore = event.target.value;
                            }}
                        />
                </Grid>  
                </Grid>  
                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>Literature Score</Typography>
                </Grid>
                <Grid item xs={6}>                   
                    <TextField
                            id="literature-score"
                            placeholder="Literature Score*"
                            helperText=""
                            value={literatureScore}
                            onChange={(event) => {
                                handleOnChange(event, setLiteratureScore); 
                                newStudent.literatureScore = event.target.value;
                            }}
                        />
                </Grid>
                </Grid>
                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>English Score</Typography>
                </Grid>
                <Grid item xs={6}>                  
                    <TextField
                            id="English-score"
                            placeholder="English Score*"
                            helperText=""
                            value={englishScore}
                            onChange={(event) => {
                                handleOnChange(event, setEnglishScore); 
                                newStudent.englishScore = event.target.value;
                            }}
                        />
                </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={6}>
				        <Button sx={{height: '100%', width: '100%'}} variant="contained" startIcon={<NoteAddIcon/>} onClick={() => {handleCancel()}}>Cancel</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button sx={{height: '100%', width: '100%'}} variant="contained" startIcon={<NoteAddIcon/>} onClick={() => {handleConfirm()}}>Confirm</Button>
                    </Grid>
                </Grid>
            </Grid> 
        </Box>
    );
}

export default NewStudentInfo;