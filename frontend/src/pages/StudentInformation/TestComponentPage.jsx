import {Grid, Box, Typography} from "@mui/material";
import StudentInfo from "./student-info-component"

function TestPage() {
  return(
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={8}>
      <Grid item xs={6} md={8}>
        {/*Left sides Tables*/}
        <Typography sx={{color: "blue", textAlign: "center", border: "10px dash black"}}>xs=6 md=8</Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        <StudentInfo studentInfo={
            {
                id: 1,
                firstName:"Hung",
                lastName:"To",
                address:"Dinh Cong",
                dob:"2001-12-22T17:00:00.000Z",
                highSchool:"Tran Nhan Tong",
                mathScore:"9.0",
                literatureScore:"5.0",
                englishScore:"10.0"
            }
            }
        />
      </Grid>
    </Grid>
  </Box>)
}

export default TestPage;