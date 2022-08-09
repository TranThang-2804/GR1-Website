import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './StudentTable.css';
import {useEffect} from "react";
import StudentService from "../../../../api/student/StudentService";
import WalaTextField from "../../../../components/WalaTextField";
import SearchIcon from '@mui/icons-material/Search';
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import {useDispatch} from "react-redux";
import {updateSelectedStudent} from "../../../../redux/actions";
import NewStudentPopup from "../newstudentpopup/NewStudentPoppup"

const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'name', label: 'Student\u00a0Name', minWidth: 170 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'dob',
    label: 'Date\u00a0Of\u00a0Birth',
    minWidth: 100
  },
  {
    id: 'highSchool',
    label: 'School',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US')
  },
  {
    id: 'finalScore',
    label: 'Final\u00a0Score',
    minWidth: 100
  },
];

export default function StudentTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [searched, setSearched] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleTableRowClick = (row) => {
    dispatch(updateSelectedStudent({
      ...row
    }))
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterRows = (searched) => {
    if(searched === ""){
      return rows;
    }
    return rows.filter((row) =>
      row.name.toLowerCase().includes(searched.toLowerCase())
      || row.id.toString() === searched
      || row.address.toLowerCase().includes(searched.toLowerCase())
      || row.highSchool.toLowerCase().includes(searched.toLowerCase())
      || row.finalScore.toString() === searched
    )
  };

  useEffect(() => {
    StudentService.findAll().then((response) => {
      if(response && response.data){
        setRows(response.data);
      }
    })
  }, [])

  rows.forEach((row, index) => {
    row.name = row.lastName + ' ' + row.firstName;
    row.finalScore = +(row.mathScore * 2) + +(row.literatureScore * 2) + +(row.englishScore);
  });

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <NewStudentPopup open={open} handleClose={handleClose}/>
      <Grid container direction={{xs: 'column', md: 'row'}}>
        <Grid item xs={1} md={3} container direction='row'>
          <Grid item xs={6} md={12}>
            <Button sx={{width: {md: '50%', xs: '100%'}, height: {md: '123%', xs: '100%'}}} variant="outlined" endIcon={<PublishRoundedIcon/>}>
              Export
            </Button>
          </Grid>
          <Grid item xs={6} container justifyContent="flex-end">
            <Button sx={{height: '100%', width: '100%', display: {xs: 'inherit', md: 'none'}}} variant="contained" startIcon={<NoteAddIcon/>} onClick={() => {handleClickOpen()}}>
              New
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={10} md={6}>
          <WalaTextField
            value = {searched}
            onChange = {(e) => setSearched(e.target.value)}
            placeholder = "Search"
            sx = {{ width: '100%'}}
            iconStart={
              <SearchIcon sx={{ color: "#2196f3", fontSize: 25 }} />
            }
          />
        </Grid>
        <Grid item xs={1} md={3} container justifyContent="flex-end">
          <Button sx={{height: '100%', width: '50%', display: {xs: 'none', md: 'inherit'}}} variant="contained" startIcon={<NoteAddIcon/>} onClick={() => {handleClickOpen()}}>
            New
          </Button>
        </Grid>
      </Grid>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth , backgroundColor: '#E5E5E5'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterRows(searched)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id} onClick={() => {handleTableRowClick(row)}}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{backgroundColor: '#E5E5E5'}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}