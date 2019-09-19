import React from "react";

import "./custom-input.styles.css";

const CustomInput = ({ label, placeholder, type }) => (
	<div className='input-group'>
		<label>{label}</label>
		<input className='form-input' placeholder={placeholder} type={type} />
	</div>
);

export default CustomInput;
