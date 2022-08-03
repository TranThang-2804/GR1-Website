import {Box, Grid, Typography} from "@mui/material";
import StudentService from "../../../api/student/StudentService";
import * as React from "react";
export function Recap() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    StudentService.findAll().then((response) => {
      if(response && response.data){
        setData(response.data);
      }
    })
  }, [])

  data.forEach((row, index) => {
    row.name = row.lastName + ' ' + row.firstName;
    row.finalScore = +(row.mathScore * 2) + +(row.literatureScore * 2) + +(row.englishScore);
  });

  const avgMath = () => {
    let avg = 0;
    data.forEach((value) => {
      avg += +value.mathScore;
    })
    return avg/data.length;
  }

  const getValedictorian = () => {
    let max = 0;
    let valedictorian;
    data.forEach((value) => {
      if(max <= value.finalScore) {
        max = value.finalScore;
        valedictorian = value.lastName + ' ' + value.firstName;
      }
    })
    return valedictorian;
  }
  return (
      <Grid
        container
        direction={{ xs: 'column', md: 'row'}}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={4} width="100%">
          <Box width='100%' style={{background: 'linear-gradient(45deg, #16BFFD, #CB3066)', textAlign: 'center'}}>
            <Typography noWrap variant='h3' sx = {{color: 'white'}}> {data.length} </Typography>
            <Typography noWrap variant='h6' sx = {{color: 'white'}}> High School Students </Typography>
          </Box>
        </Grid>
        <Grid item md={4} width="100%">
          <Box width='100%' style={{background: 'linear-gradient(45deg, #16BFFD, #CB3066)', textAlign: 'center'}}>
            <Typography noWrap variant='h3' sx = {{color: 'white'}}> {avgMath()} </Typography>
            <Typography noWrap variant='h6' sx = {{color: 'white'}}> Average Math Score </Typography>
          </Box>
        </Grid>
        <Grid item md={4} width="100%">
          <Box width='100%' style={{background: 'linear-gradient(45deg, #16BFFD, #CB3066)', textAlign: 'center'}}>
            <Typography noWrap variant='h3' sx = {{color: 'white'}}> {getValedictorian()} </Typography>
            <Typography noWrap variant='h6' sx = {{color: 'white'}}> Valedictorian </Typography>
          </Box>
        </Grid>
      </Grid>
  );
}