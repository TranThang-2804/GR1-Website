import * as React from 'react';
import {Grid, Box, Typography, Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import StudentService from "../../../../../api/student/StudentService";
import {useDispatch, useSelector} from "react-redux";
import * as Validator from  "./InputConstraint"
import {updateRefreshState} from "../../../../../redux/actions";

const typoFont = {
  fontFamily: "san-arif",
}

const fieldTypoStyle = {
  ...typoFont,
  display: 'flex',
  color: "rgb(136, 136, 136)",
  alignItems: 'center',
  fontSize: 16,
  fontWeight: "bold"
}

const textFieldStyle = {

}

const rowStyle = {
  my: 1
}

let newStudent = {
    id : NaN,
    firstName : "",
    lastName : null,
    address : null,
    dob: new Date(),
    highSchool : "",
    mathScore : NaN,
    literatureScore : NaN,
    englishScore : NaN
}

function NewStudentInfo(props) {
    const [id, setId] = React.useState(null);
    const [firstName, setFirstName] = React.useState(null);
    const [lastName, setLastName] = React.useState(null);
    const [dob, setDob] = React.useState(null);
    const [address, setAddress] = React.useState(null);
    const [highSchool, setHighSchool] = React.useState(null);
    const [mathScore, setMathScore] = React.useState(null);
    const [literatureScore, setLiteratureScore] = React.useState(null);
    const [englishScore, setEnglishScore] = React.useState(null);

    const [idError, setIdError] = React.useState(false);
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [lastNameError, setLastNameError] = React.useState(false);
    const [dobError, setDobError] = React.useState(false);
    const [addressError, setAddressError] = React.useState(false);
    const [highSchoolError, setHighSchoolError] = React.useState(false);
    const [mathScoreError, setMathScoreError] = React.useState(false);
    const [literatureScoreError, setLiteratureScoreError] = React.useState(false);
    const [englishScoreError, setEnglishScoreError] = React.useState(false);


    const closePopup = props.handleClose;

    const stateRefresh = useSelector((state) => state.stateRefresh);
    const dispatch = useDispatch();

    const handleOnChange = (event, setFunction) => {
        setFunction(event.target.value);
        validate();
    }

    const validate = () => {
        setIdError(!Validator.validateId(id));
        setFirstNameError(!Validator.validateFirstName(firstName));
        setLastNameError(!Validator.validateLastName(lastName));
        setDobError(!Validator.validateDob(dob));
        setAddressError(!Validator.validateAddressError(address));
        setHighSchoolError(!Validator.validateHighSchoolError(highSchool));
        setMathScoreError(!Validator.validateMathScore(mathScore));
        setLiteratureScoreError(!Validator.validateLiteratureScore(literatureScore));
        setEnglishScoreError(!Validator.validateEnglishScore(englishScore));
    }

    const handleCancel = () => {
        closePopup();
    }


    const handleConfirm = () => {
        validate();
        if(idError || firstNameError || lastNameError || dobError || addressError || highSchoolError || mathScoreError || literatureScoreError || englishScoreError) return;
      if(id == null || firstName == null || lastName == null || dob == null || address == null || highSchool == null || mathScore == null || literatureScore == null || englishScore == null) return;
        // handle add new student api request to backend
        StudentService.createNewStudent(newStudent).then((res) => {
            dispatch(updateRefreshState(!stateRefresh));
            if(res.data === `Cannot create student with id = ${id}`){
              alert(res.data);
            } else {
              closePopup();
            }
        });
    }

    return(
        <Box sx={{
            width: '100%', 
            justifyContent: 'center', 
            alignItems:'center',
            maxWidth: '500px'
        }}>
           <Grid container sx={{}}>

                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>Student ID</Typography>
                </Grid>
                <Grid item xs={6}>                  
                    <TextField
                        sx={{...textFieldStyle}}
                        id="student-id"
                        placeholder="Student ID*"
                        helperText={idError ? "Invalid Input" : ""}
                        error={idError}
                        value={id}
                        onChange={(event) => {
                            handleOnChange(event, setId); 
                            newStudent.id = Number(event.target.value);
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
                        sx={{...textFieldStyle}}
                        helperText={firstNameError ? "Invalid Input" : ""}
                        error={firstNameError}
                        id="first-name"
                        placeholder="First Name*"
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
                        sx={{...textFieldStyle}}
                        helperText={lastNameError ? "Invalid Input" : ""}
                        error={lastNameError}
                        id="last-name"
                        placeholder="Last Name*"
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
                        sx={{...textFieldStyle}}
                        id="date-of-birth"
                        placeholder="Date of birth*"
                        helperText={dobError ? "Invalid Input" : ""}
                        error={dobError}
                        value={dob}
                        onChange={(event) => {
                            handleOnChange(event, setDob); 
                            newStudent.dob = new Date(event.target.value);
                        }}
                    />
                </Grid>    
                </Grid>

                <Grid container item xs={12} sx={{...rowStyle}}>
                <Grid item xs={6}>
                    <Typography sx = {{...fieldTypoStyle}}>Address</Typography>
                </Grid>
                <Grid item xs={6}>                      
                    <TextField
                        sx={{...textFieldStyle}}
                        id="address"
                        placeholder="Address*"
                        helperText={addressError ? "Invalid Input" : ""}
                        error={addressError}
                        value={address}
                        onChange={(event) => {
                            handleOnChange(event, setAddress); 
                            newStudent.address = event.target.value;
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
                        sx={{...textFieldStyle}}
                        id="High-School"
                        placeholder="High School*"
                        helperText={highSchoolError ? "Invalid Input" : ""}
                        error={highSchoolError}
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
                        sx={{...textFieldStyle}}
                        id="math-score"
                        placeholder="Math Score*"
                        helperText={mathScoreError ? "Invalid Input" : ""}
                        error={mathScoreError}
                        value={mathScore}
                        onChange={(event) => {
                            handleOnChange(event, setMathScore); 
                            newStudent.mathScore = Number(event.target.value);
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
                        sx={{...textFieldStyle}}
                        id="literature-score"
                        placeholder="Literature Score*"
                        helperText={literatureScoreError ? "Invalid Input" : ""}
                        error={literatureScoreError}
                        value={literatureScore}
                        onChange={(event) => {
                            handleOnChange(event, setLiteratureScore); 
                            newStudent.literatureScore = Number(event.target.value);
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
                        sx={{...textFieldStyle}}
                        id="English-score"
                        placeholder="English Score*"
                        helperText={englishScoreError ? "Invalid Input" : ""}
                        error={englishScoreError}
                        value={englishScore}
                        onChange={(event) => {
                            handleOnChange(event, setEnglishScore); 
                            newStudent.englishScore = Number(event.target.value);
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