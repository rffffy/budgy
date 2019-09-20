import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DialogBox from "../dialog-box/dialog-box.component";

import "./custom-select-popup.styles.css";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}));

export default function CustomSelectPopUp({ label }) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		open: false,
		age: ""
	});

	const handleChange = name => event => {
		setState({ ...state, [name]: Number(event.target.value) });
	};

	function handleClickOpen() {
		setState({ ...state, open: true });
	}

	function handleClose() {
		setState({ ...state, open: false });
	}

	return (
		<div>
			<div className='custom-select-pop-up-element'>
				<label>{label}</label>
				<Button onClick={handleClickOpen}>Open select dialog</Button>
			</div>
			<DialogBox
				classes={classes}
				state={state}
				handleChange={handleChange}
				handleClose={handleClose}
			/>
		</div>
	);
}
