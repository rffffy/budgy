import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectTotalIncome,
	selectTotalExpenses,
	selectTotalBalance
} from "../../redux/transaction/transaction.selectors";

import {
	faBalanceScale,
	faWallet,
	faMoneyBillWave
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./budget-overview.styles.css";

const BudgetOverview = ({ income, expenses, balance }) => {
	const formatter = new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR"
	});

	return (
		<div className='budget-overview_container'>
			<div className='budget-block info-block'>
				<span className='info-title'>Income</span>
				<FontAwesomeIcon className='income-icon' icon={faWallet} size='2x' />
				<span className='income-value'>{formatter.format(income)}</span>
			</div>
			<div className='expenses-block info-block'>
				<span className='info-title'>Expenses</span>
				<FontAwesomeIcon
					className='expenses-icon'
					icon={faMoneyBillWave}
					size='2x'
				/>
				<span className='expenses-value'>{formatter.format(expenses)}</span>
			</div>
			<div className='balance-block info-block'>
				<span className='info-title'>Balance</span>
				<FontAwesomeIcon
					className='balance-icon'
					icon={faBalanceScale}
					size='2x'
				/>
				<span className='balance-value'>{formatter.format(balance)}</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	income: selectTotalIncome,
	expenses: selectTotalExpenses,
	balance: selectTotalBalance
});

export default connect(mapStateToProps)(BudgetOverview);
