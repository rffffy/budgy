import React from "react";

import "./custom-select.styles.css";

const CustomSelect = ({ label, handleChange, options, ...otherProps }) => (
	<div className='custom-select-container'>
		<label className='custom-select-label'>{label}</label>
		<select className='form-select' {...otherProps} onChange={handleChange}>
			<option value=''>----</option>
			{options.map(option => (
				<option key={option.id} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	</div>
);

export default CustomSelect;
