import React from "react";

import "./transactions-overview.styles.css";
import TransactionItem from "../transaction-item/transaction-item.component";

const TransactionsOverview = () => (
	<div className='transaction-overview_container'>
		<h1 className='transaction-overview-title'>Transactions overview</h1>
		<div className='transaction-overview-header'>
			<div className='header-block'>
				<span>Amount</span>
			</div>
			<div className='header-block'>
				<span>Type</span>
			</div>
			<div className='header-block'>
				<span>Category</span>
			</div>
		</div>
		<TransactionItem></TransactionItem>
	</div>
);

export default TransactionsOverview;
