import React from "react";

import "./custom-input.styles.css";

const CustomInput = ({ label, placeholder, handleChange, ...otherProps }) => (
	<div className='custom-input-container'>
		<label className='custom-input-label'>{label}</label>
		<input
			className='form-input'
			onChange={handleChange}
			placeholder={placeholder}
			{...otherProps}
		/>
	</div>
);

export default CustomInput;
