import React from "react";

import "./custom-select.styles.css";

import {
	faSortDown,
	faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomSelect = ({ label, placeholder, type, disabled }) => (
	<div className='select-group'>
		<label>{label}</label>
		<div className='custom-dropdown'>
			<FontAwesomeIcon
				className='dropdown-arrow'
				icon={faExternalLinkAlt}
				size='1x'
			/>
			<input
				className='form-select'
				placeholder={placeholder}
				type={type}
				disabled={disabled}
			/>
		</div>
	</div>
);

export default CustomSelect;
