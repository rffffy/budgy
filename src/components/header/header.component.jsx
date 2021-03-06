import React from "react";

// import { ReactComponent as Logo } from "../../assets/Budgy-logo-3/vector/default-monochrome.svg";
import { ReactComponent as Logo } from "../../assets/Budgy-logo-4/vector/default-monochrome.svg";
// import { ReactComponent as LogoBlack } from "../../assets/Budgy-logo-3/vector/default-monochrome-black.svg";
// import { ReactComponent as LogoWhite } from "../../assets/Budgy-logo-3/vector/default-monochrome-white.svg";
// import { ReactComponent as LogoAlt } from "../../assets/Budgy-logo/vector/default-monochrome.svg";

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
