import React from "react";

import "./transaction-input.styles.css";

const TransactionInput = () => (
	<div className='transaction-input_container'>
		<h3>Enter your transaction</h3>
		<div className='input-block'>
			<div className='info-block'>
				<label>Amount:</label>
				<input className='mg-t' type='number'></input>
			</div>
			<div className='info-block'>
				<label>Type:</label>
				<div className='radio-buttons'>
					<div className='radio-button'>
						<input type='radio' />
						<label>Income</label>
					</div>
					<div className='radio-button'>
						<input type='radio' />
						<label>Expense</label>
					</div>
				</div>
			</div>
			<div className='info-block'>
				<label>Category:</label>
				<input className='mg-t' type='number'></input>
			</div>
		</div>
	</div>
);

export default TransactionInput;
