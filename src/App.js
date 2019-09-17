import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Budget from "./components/budget/budget.component";

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Sidebar></Sidebar>
			<Budget />
		</div>
	);
}

export default App;
