import * as React from "react";
import {Grid, Box, Typography} from "@mui/material";
import {Recap} from "./components/Recap";
import StudentTable from "./components/table/StudentTable";
import StudentInfo from "../StudentInformation/student-info-component"
import {useSelector} from "react-redux";

function Home() {
  const selectedStudent = useSelector((state) => state.selectedStudent)
  console.log(selectedStudent)
  return(
  <Box sx={{ flexGrow: 1 }} margin={{xs: 1, sm: 3, md: 6 }}>
    <Grid container spacing={{xs: 1, sm:3, md: 6}}>
      <Grid item xs={6} sm={7} md={9}>
        {/*Left sides Tables*/}
        <Recap/>
        <StudentTable/>
      </Grid>
      <Grid item xs={6} sm={5} md={3}>
        {/*Right sides Info*/}
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
            }/>
      </Grid>
    </Grid>
  </Box>)
}

export default Home;