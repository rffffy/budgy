import React from "react";

import { ReactComponent as Logo } from "../../assets/Budgy-logo-3/vector/default-monochrome.svg";

import "./header.styles.css";

const Header = () => (
	<div className='header'>
		<Logo className='logo'></Logo>
		<div className='options'>
			<a href='#' className='option'>
				Dashboard
			</a>
			<a href='#' className='option'>
				Transcations
			</a>
			<a href='#' className='option'>
				Reports
			</a>
		</div>
	</div>
);

export default Header;
