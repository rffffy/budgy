import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({ children, ...otherProps }) => (
	<div className='custom-button-container'>
		<button className='form-button' {...otherProps}>
			{children}
		</button>
	</div>
);

export default CustomButton;
