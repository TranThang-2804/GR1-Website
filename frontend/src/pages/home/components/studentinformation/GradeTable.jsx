import {Box, Divider, Grid, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useSelector} from "react-redux";

const typoFont = {
  fontFamily: "san-arif",
}

export const GradeTable = () => {
  const selectedStudent = useSelector((state) => state.selectedStudent);
  const finalScore = parseFloat(selectedStudent.mathScore) + parseFloat(selectedStudent.englishScore) + parseFloat(selectedStudent.literatureScore);

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
              <Typography sx={{...typoFont}}>{selectedStudent.mathScore}</Typography>
            </Grid>
            <Grid item xs={columnsWidth[1]} align="center">
              <Typography sx={{...typoFont}}>{selectedStudent.literatureScore}</Typography>
            </Grid>
            <Grid item xs={columnsWidth[2]} align="center">
              <Typography sx={{...typoFont}}>{selectedStudent.englishScore}</Typography>
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