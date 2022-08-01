import * as React from "react";
import {Grid, Box, Typography} from "@mui/material";
import {Recap} from "./components/Recap";
import StudentTable from "./components/table/StudentTable";
function Home() {
  return(
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{xs: 1, sm:3, md: 6}}>
      <Grid item xs={6} sm={7} md={8}>
        {/*Left sides Tables*/}
        <Recap/>
        <StudentTable/>
      </Grid>
      <Grid item xs={6} sm={5} md={4}>
        {/*Right sides Info*/}
        <Typography  sx={{color: "blue", textAlign: "center", border: "10px dash black"}}>xs=6 sm=5 md=4</Typography>
      </Grid>
    </Grid>
  </Box>)
}

export default Home;