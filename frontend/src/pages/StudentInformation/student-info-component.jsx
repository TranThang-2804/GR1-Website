import {Grid, Box, Typography, Divider, Button} from "@mui/material";
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { fontWeight } from "@mui/system";

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

const GradeTable = (props) => {
  const finalScore = parseFloat(props.studentInfo.mathScore) + parseFloat(props.studentInfo.englishScore) + parseFloat(props.studentInfo.literatureScore); 

  const columnsWidth = [2.5, 3, 2.5, 4]

  return(
    <Grid item xs={12}>
      <Box sx={{
          mx:2, 
          my: 5
        }}
        >
          <Grid component={Paper} container sx={{background: "#ffddcc"}}>
              <Grid container item xs={12} sx={{py:2}}>
                <Grid item xs={columnsWidth[0]} align="center">
                  <Typography noWrap sx={{...typoFont, fontWeight:"bold"}}>Math</Typography>
                </Grid>
                <Grid item xs={columnsWidth[1]} align="center">
                  <Typography noWrap sx={{...typoFont, fontWeight:"bold"}}>Literature</Typography>
                </Grid>
                <Grid item xs={columnsWidth[2]} align="center">
                  <Typography noWrap sx={{...typoFont, fontWeight:"bold"}}>English</Typography>
                </Grid>
                <Grid item xs={columnsWidth[3]} align="center">
                  <Typography noWrap sx={{...typoFont, fontWeight:"bold"}}>Final score</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{mx:2}}/>
              </Grid>
              <Grid container item xs={12} sx={{py: 1}}>
                <Grid item xs={columnsWidth[0]} align="center">
                  <Typography sx={{...typoFont}}>{props.studentInfo.mathScore}</Typography>
                </Grid>
                <Grid item xs={columnsWidth[1]} align="center">
                  <Typography sx={{...typoFont}}>{props.studentInfo.literatureScore}</Typography>
                </Grid>
                <Grid item xs={columnsWidth[2]} align="center">
                  <Typography sx={{...typoFont}}>{props.studentInfo.englishScore}</Typography>
                </Grid>
                <Grid item xs={columnsWidth[3]} align="center">
                  <Typography sx={{...typoFont}}>{finalScore}</Typography>
                </Grid>
              </Grid>
          </Grid>
      </Box>
    </Grid>
  );
}

function StudentInfo(props) {
  const dob = new Date(props.studentInfo.dob)
  const yyyy = dob.getFullYear();
  let mm = dob.getMonth() + 1; // Months start at 0!
  let dd = dob.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const formattedDob = dd + '/' + mm + '/' + yyyy;

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
              {props.studentInfo.lastName} {props.studentInfo.firstName}
            </Typography>
          </Box>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Student ID</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{props.studentInfo.id}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{props.studentInfo.lastName} {props.studentInfo.firstName}</Typography>
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
            <Typography sx = {{...valueTypoStyle}}>{props.studentInfo.address}</Typography>
          </Grid> 
        </Grid>

        <Grid container item xs={12} sx={{...rowStyle}}>
          <Grid item xs={6}>
            <Typography sx = {{...fieldTypoStyle}}>School</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx = {{...valueTypoStyle}}>{props.studentInfo.highSchool}</Typography>
          </Grid>  
        </Grid>  
        
        <GradeTable studentInfo={props.studentInfo}/>
        <Grid item xs={12}>
          <Box sx={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button variant="contained" startIcon={<EditIcon />} sx={{mx:1}}>
              <Typography sx={{...typoFont, fontSize: 12}}>Edit</Typography>
            </Button>
            <Button color="error" variant="contained" startIcon={<DeleteIcon />} sx={{mx:1, backgroud:"red", color:"white"}} >
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