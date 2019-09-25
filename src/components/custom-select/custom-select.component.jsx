import React from "react";

import "./custom-select.styles.css";

const CustomSelect = ({ label, handleChange, ...otherProps }) => (
	<div className='custom-select-container'>
		<label className='custom-select-label'>{label}</label>
		<select className='form-select' {...otherProps} onChange={handleChange}>
			<option value=''>----</option>
			<option value='apple'>apple</option>
		</select>
	</div>
);

export default CustomSelect;
