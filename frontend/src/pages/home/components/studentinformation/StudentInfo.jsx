import * as React from "react";
import {Grid, Box, Typography, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useDispatch, useSelector} from "react-redux";
import {GradeTable} from "./GradeTable";
import StudentService from "../../../../api/student/StudentService";
import {updateRefreshState, updateSelectedStudent} from "../../../../redux/actions";
import TextField from "@mui/material/TextField";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

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


function StudentInfo(props) {
  const selectedStudent = useSelector((state) => state.selectedStudent)
  const stateRefresh = useSelector((state) => state.stateRefresh);

  const [firstName, setFirstName] = React.useState(selectedStudent.firstName);
  const [lastName, setLastName] = React.useState(selectedStudent.lastName);
  const [birth, setDob] = React.useState(selectedStudent.dob);
  const [address, setAddress] = React.useState(selectedStudent.address);
  const [highSchool, setHighSchool] = React.useState(selectedStudent.highSchool);
  React.useEffect(() => {
    setFirstName(selectedStudent.firstName);
    setLastName(selectedStudent.lastName);
    setDob(selectedStudent.dob);
    setAddress(selectedStudent.address);
    setHighSchool(selectedStudent.highSchool);
  }, [selectedStudent])
  const [editable, setEditable] = React.useState(false);

  const dob = new Date(selectedStudent.dob)
  const yyyy = dob.getFullYear();
  let mm = dob.getMonth() + 1; // Months start at 0!
  let dd = dob.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const formattedDob = dd + '/' + mm + '/' + yyyy;
  const dispatch = useDispatch();

  const deleteStudent = () => {
    StudentService.deleteStudent(selectedStudent.id).then(() => {
      dispatch(updateRefreshState(!stateRefresh));
      dispatch(updateSelectedStudent(null));
    });
  }

  const updateStudent = () => {
    const updatedStudent = {
      id: selectedStudent.id,
      firstName,
      lastName,
      address,
      dob: birth,
      highSchool,
      mathScore: selectedStudent.mathScore,
      literatureScore: selectedStudent.literatureScore,
      englishScore: selectedStudent.englishScore
    }
    StudentService.updateStudent(updatedStudent).then((res) => {
      alert(res.data);
      if(res.data === "Update successfully"){
        dispatch(updateRefreshState(!stateRefresh));
        setEditable(false);
      }
    });
  }
  return(
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}>
    <Box sx={{ 
        flexGrow: 1, 
        p: 2,
        background: 'rgb(242, 242, 242)',
        maxWidth: '350px', 
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Grid container >
        <Grid item xs={12}>
          <Typography sx={{
              ...typoFont,
              color: "black", 
              fontWeight: "bold", 
              textAlign: "center", 
              fontSize: 25,
              border: "14px dash black",
              mt: 3
            }}>
              Student Information
            </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{
              display: "flex",
              justifyContent: "center"}}
            >
            <Typography sx={{
              ...typoFont,
              color: "black", 
              fontWeight: "medium", 
              textAlign: "center", 
              fontSize: 20,
              border: "14px dash black",
              m: 2
            }}
            >
              {lastName} {firstName}
            </Typography>
          </Box>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Student ID</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>
              {selectedStudent.id}
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>First Name</Typography>
          </Grid>
          <Grid item xs={6}>
            {editable ? <TextField sx = {{...valueTypoStyle}}
                       value={firstName} onChange={(e) => {setFirstName(e.target.value)}}
            >
            </TextField> : <Typography sx = {{...valueTypoStyle}}>
              {firstName}
            </Typography>}
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Last Name</Typography>
          </Grid>
          <Grid item xs={6}>
            {editable ? <TextField sx = {{...valueTypoStyle}}
                                   value={lastName} onChange={(e) => {setLastName(e.target.value)}}
            >
            </TextField> : <Typography sx = {{...valueTypoStyle}}>
              {lastName}
            </Typography>}
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>DOB</Typography>
          </Grid>
          <Grid item xs={6}>
            {editable ? <TextField sx = {{...valueTypoStyle}} value={birth} onChange={(e) => {setDob(e.target.value)}}></TextField> : <Typography sx = {{...valueTypoStyle}}> {formattedDob}</Typography>}
          </Grid>    
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Address</Typography>
          </Grid>
          <Grid item xs={6}>
            {editable ? <TextField sx = {{...valueTypoStyle}} value={address} onChange={(e) => {setAddress(e.target.value)}}></TextField> : <Typography sx = {{...valueTypoStyle}}> {address} </Typography>}
          </Grid> 
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>School</Typography>
          </Grid>
          <Grid item xs={6}>
            {editable ? <TextField sx = {{...valueTypoStyle}} value={highSchool} onChange={(e) => {setHighSchool(e.target.value)}}></TextField> : <Typography sx = {{...valueTypoStyle}}> {highSchool} </Typography>}
          </Grid>  
        </Grid>  
        
        <GradeTable/>
        <Grid item xs={12}>
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            {!editable ?
              <><Button variant="contained" startIcon={<EditIcon/>} sx={{mx: 1}} onClick={() => {
                setEditable(true);
              }}>
                <Typography sx={{...typoFont, fontSize: 12}}>Edit</Typography>
              </Button><Button color="error" variant="contained" startIcon={<DeleteIcon/>}
                               sx={{mx: 1, backgroud: "red", color: "white"}} onClick={() => {
                deleteStudent();
              }}>
                <Typography sx={{...typoFont, fontSize: 12}}>Delete</Typography>
              </Button></>
              : <Button variant="contained" sx={{mx: 1}} startIcon={<DoneOutlineIcon/>} onClick={() => {
                updateStudent();
              }
              }>Done</Button>
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default StudentInfo;