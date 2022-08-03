import * as React from "react";
import {Grid, Box} from "@mui/material";
import {Recap} from "./components/Recap";
import StudentTable from "./components/table/StudentTable";
import StudentInfo from "./components/studentinformation/StudentInfo"
import {useSelector} from "react-redux";

function Home() {
  const selectedStudent = useSelector((state) => state.selectedStudent)
  console.log(selectedStudent)
  return(
  <Box sx={{ flexGrow: 1 }} margin={{xs: 1, sm: 3, md: 6 }}>
    <Grid container spacing={{xs: 1, sm:3, md: 6}}>
      <Grid item xs={6} sm={7} md={9}>
        <Recap/>
        <StudentTable/>
      </Grid>
      <Grid item xs={6} sm={5} md={3}>
        {selectedStudent && <StudentInfo studentInfo={selectedStudent}/>}
      </Grid>
    </Grid>
  </Box>)
}

export default Home;