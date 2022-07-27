import {Grid, Box, Typography} from "@mui/material";

function Home() {
  return(
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={8}>
      <Grid item xs={6} md={8}>
        {/*Left sides Tables*/}
        <Typography sx={{color: "blue", textAlign: "center", border: "10px dash black"}}>xs=6 md=8</Typography>
      </Grid>
      <Grid item xs={6} md={4}>
        {/*Right sides Info*/}
        <Typography  sx={{color: "blue", textAlign: "center", border: "10px dash black"}}>xs=6 md=4</Typography>
      </Grid>
    </Grid>
  </Box>)
}

export default Home;