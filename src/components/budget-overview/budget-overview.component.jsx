import React from "react";

import {
	faBalanceScale,
	faWallet,
	faMoneyBillWave
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./budget-overview.styles.css";

const BudgetOverview = () => (
	<div className='budget-overview_container'>
		<div className='budget-block info-block'>
			<span className='info-title'>Income</span>
			<FontAwesomeIcon className='income-icon' icon={faWallet} size='2x' />
			<span className='income-value'>€0</span>
		</div>
		<div className='expenses-block info-block'>
			<span className='info-title'>Expenses</span>
			<FontAwesomeIcon
				className='expenses-icon'
				icon={faMoneyBillWave}
				size='2x'
			/>
			<span className='expenses-value'>€0</span>
		</div>
		<div className='balance-block info-block'>
			<span className='info-title'>Balance</span>
			<FontAwesomeIcon
				className='balance-icon'
				icon={faBalanceScale}
				size='2x'
			/>
			<span className='balance-value'>€0</span>
		</div>
	</div>
);

export default BudgetOverview;
