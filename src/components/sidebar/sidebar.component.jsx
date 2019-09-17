import React from "react";

import "./sidebar.styles.css";

const Sidebar = () => (
	<div className='nav-items'>
		<a href='#' className='nav-item'>
			Dashboard
		</a>
		<a href='#' className='nav-item'>
			Transaction
		</a>
		<a href='#' className='nav-item'>
			Records
		</a>
	</div>
);

export default Sidebar;
