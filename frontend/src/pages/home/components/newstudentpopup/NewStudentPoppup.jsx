import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import NewStudentInfo from './components/NewStudentInfo'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NewStudentPoppup(props) {

  	return (
		<Dialog
			open={props.open}
			TransitionComponent={Transition}
			// keepMounted
			onClose={props.handleClose}
			aria-describedby="add-student-slide-description"
		>
			<DialogTitle>
				<Typography>{"Add Student into Database"}</Typography>
			</DialogTitle>
			<DialogContent>
				<NewStudentInfo handleClose={props.handleClose} open={props.open}/>	
			</DialogContent>
		</Dialog>
  );
}

export default NewStudentPoppup;