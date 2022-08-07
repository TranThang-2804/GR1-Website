import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Typography } from '@mui/material';
import { NewStudentInfo } from '../components/NewStudentInfo'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NewStudentPoppup(props) {
  return (
		<Dialog
			open={props.open}
			TransitionComponent={Transition}
			keepMounted
			onClose={props.handleClose}
			aria-describedby="add-student-slide-description"
		>
			<DialogTitle>
				<Typography>{"Add Student into Database"}</Typography>
			</DialogTitle>
			<DialogContent>
				<NewStudentInfo/>	
			</DialogContent>
			<DialogActions>
				<Button Button sx={{height: '100%', width: '100%', display: {xs: 'inherit', md: 'none'}}} variant="contained" startIcon={<NoteAddIcon/>} onClick={props.handleClose}>Cancel</Button>
				<Button Button sx={{height: '100%', width: '100%', display: {xs: 'inherit', md: 'none'}}} variant="contained" startIcon={<NoteAddIcon/>} onClick={props.handleClose}>Confirm</Button>
			</DialogActions>
		</Dialog>
  );
}

export default NewStudentPoppup;