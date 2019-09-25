import React from "react";

import "./custom-select.styles.css";

const CustomSelect = ({ label, placeholder, type }) => (
	<div className='custom-select-container'>
		<label className='custom-select-label'>{label}</label>
		<select class='form-select'>
			<option>This is a native select element</option>
			<option>Apples</option>
			<option>Bananas</option>
			<option>Grapes</option>
			<option>Oranges</option>
		</select>
	</div>
);

export default CustomSelect;
