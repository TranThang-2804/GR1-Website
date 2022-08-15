import {Grid, Box, Typography, Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useDispatch, useSelector} from "react-redux";
import {GradeTable} from "./GradeTable";
import StudentService from "../../../../api/student/StudentService";
import {updateRefreshState, updateSelectedStudent} from "../../../../redux/actions";

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
              {selectedStudent.lastName} {selectedStudent.firstName}
            </Typography>
          </Box>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Student ID</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{selectedStudent.id}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{selectedStudent.lastName} {selectedStudent.firstName}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>DOB</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{formattedDob}</Typography>
          </Grid>    
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Address</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{selectedStudent.address}</Typography>
          </Grid> 
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>School</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{selectedStudent.highSchool}</Typography>
          </Grid>  
        </Grid>  
        
        <GradeTable/>
        <Grid item xs={12}>
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button variant="contained" startIcon={<EditIcon />} sx={{mx:1}}>
              <Typography sx={{...typoFont, fontSize: 12}}>Edit</Typography>
            </Button>
            <Button color="error" variant="contained" startIcon={<DeleteIcon />} sx={{mx:1, backgroud:"red", color:"white"}} onClick={() => {deleteStudent()}} >
              <Typography sx={{...typoFont, fontSize: 12}}>Delete</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default StudentInfo;