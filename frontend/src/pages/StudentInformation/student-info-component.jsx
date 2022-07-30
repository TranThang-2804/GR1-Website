import {Grid, Box, Typography, Divider, Button} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const GradeTable = (props) => {
  const finalScore = parseFloat(props.studentInfo.mathScore) + parseFloat(props.studentInfo.englishScore) + parseFloat(props.studentInfo.literatureScore); 

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return(
    <Grid item xs={12}>
      <Box sx={{
          mx:2, 
          my: 5
        }}
        >
          <TableContainer component={Paper} sx={{background: "#ffddcc"}}>
            <Table sx={{
                width: '100px', 
                minWidth: 200,
              }} size="small" align="center">
              <TableHead sx={{}}>
                <TableRow>
                  <StyledTableCell align="center">Math</StyledTableCell>
                  <StyledTableCell align="center">Literature</StyledTableCell>
                  <StyledTableCell align="center">English</StyledTableCell>
                  <StyledTableCell align="center">Final score</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell align="center">{props.studentInfo.mathScore}</StyledTableCell>
                    <StyledTableCell align="center">{props.studentInfo.literatureScore}</StyledTableCell>
                    <StyledTableCell align="center">{props.studentInfo.englishScore}</StyledTableCell>
                    <StyledTableCell align="center">{finalScore}</StyledTableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
      </Box>
    </Grid>
  );
}

function StudentInfo(props) {
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

  return(
    <Box sx={{ 
        flexGrow: 1, 
        p: 2,
        background: 'rgb(242, 242, 242)',
        width: '350px',
        maxWidth: '700px', 
      }}>
      <Grid container>
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
          <Box>
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
            <Typography sx = {{...valueTypoStyle}}>{props.studentInfo.dob}</Typography>
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
            justifyContent: "space-around"
          }}>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default StudentInfo;