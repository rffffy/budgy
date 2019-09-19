import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
// import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

import "./custom-radio-button.styles.css";

const GreenRadio = withStyles({
	root: {
		color: green[400],
		"&$checked": {
			color: green[600]
		}
	},
	checked: {}
})(props => <Radio color='default' {...props} />);

const RedRadio = withStyles({
	root: {
		color: red[400],
		"&$checked": {
			color: red[600]
		}
	},
	checked: {}
})(props => <Radio color='default' {...props} />);

const CustomRadioButton = ({ label }) => {
	const [selectedValue, setSelectedValue] = React.useState("a");

	function handleChange(event) {
		setSelectedValue(event.target.value);
	}
	return (
		<div className='button-group'>
			<label>Type</label>
			<div className='radio-buttons'>
				<label>Income:</label>
				<GreenRadio
					checked={selectedValue === "income"}
					onChange={handleChange}
					value='income'
					name='radio-button-demo'
					inputProps={{ "aria-label": "A" }}
				/>
				<label>Expense:</label>
				<RedRadio
					checked={selectedValue === "expense"}
					onChange={handleChange}
					value='expense'
					name='radio-button-demo'
					inputProps={{ "aria-label": "B" }}
				/>
			</div>
		</div>
	);
};

export default CustomRadioButton;
