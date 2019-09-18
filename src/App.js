import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import TransactionInput from "./components/transaction-input/transaction-input.component";
import BudgetOverview from "./components/budget-overview/budget-overview.component";
import TransactionsOverview from "./components/transactions-overview/transactions-overview.component";

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<div className='main-container'>
				<TransactionInput />
				<BudgetOverview />
				<TransactionsOverview />
			</div>
		</div>
	);
}

export default App;
