import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectTransactions } from "../../redux/transaction/transaction.selectors";

import "./transaction-item.styles.css";

const TransactionItem = ({ transactions }) => (
	<div className='transaction-items-block'>
		{transactions
			.filter((transaction, index) => index < 4)
			.map(transaction => (
				<div
					className={`transaction-item ${transaction.type
						.toLowerCase()
						.concat("-type")}`}>
					<span className='item-amount item-info'>€{transaction.amount}</span>
					<span className='item-type item-info'>{transaction.type}</span>
					<span className='item-category item-info'>
						{transaction.category}
					</span>
				</div>
			))}
		{transactions.length > 0 ? (
			<div className='view-more'>
				<span>View More</span>
			</div>
		) : (
			""
		)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	transactions: selectTransactions
});

export default connect(mapStateToProps)(TransactionItem);
