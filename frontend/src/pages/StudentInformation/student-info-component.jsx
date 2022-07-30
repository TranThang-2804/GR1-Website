import {Grid, Box, Typography} from "@mui/material";

function StudentInfo(props) {
  return(
  <Box sx={{ 
      flexGrow: 1, maxWidth: '350px', 
    }}>
    <Grid container >
      <Grid item xs={12}>
        <Typography sx={{color: "black", textAlign: "center", border: "14px dash black"}}>Student Information</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography sx={{color: "black", textAlign: "center", border: "14px dash black"}}>Student Information</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{mb: 2}}>
        <Box
            sx={{
                display:'flex',
                alignItems: 'flex-start',
                flexDirection:'row',
                justifyContent: 'space-between',
                lineHeight: 0,
                pr: 0,
            }}>
            <item>
                <Typography>Student ID</Typography>
            </item>
                <Typography>{props.studentInfo.id}</Typography>
        </Box>
        <Box
            sx={{
                display:'flex',
                alignItems: 'flex-start',
                flexDirection:'row',
                justifyContent: 'space-between',
                lineHeight: 0,
                pr: 0,
            }}>
            <item>
                <Typography>Name</Typography>
            </item>
                <Typography>{props.studentInfo.lastName} {props.studentInfo.firstName}</Typography>
        </Box>
        <Box
            sx={{
                display:'flex',
                alignItems: 'flex-start',
                flexDirection:'row',
                justifyContent: 'space-between',
                lineHeight: 0,
                pr: 0,
            }}>
            <item>
                <Typography>DOB</Typography>
            </item>
                <Typography>{props.studentInfo.dob}</Typography>
        </Box>
        <Box
            sx={{
                display:'flex',
                alignItems: 'flex-start',
                flexDirection:'row',
                justifyContent: 'space-between',
                lineHeight: 0,
                pr: 0,
            }}>
            <item>
                <Typography>Address</Typography>
            </item>
                <Typography>{props.studentInfo.address}</Typography>
        </Box>
        <Box
            sx={{
                display:'flex',
                alignItems: 'flex-start',
                flexDirection:'row',
                justifyContent: 'space-between',
                lineHeight: 0,
                pr: 0,
            }}>
            <item>
                <Typography>School</Typography>
            </item>
                <Typography>{props.studentInfo.highSchool}</Typography>
        </Box>
    </Grid>
    </Grid>
  </Box>)
}

export default StudentInfo;