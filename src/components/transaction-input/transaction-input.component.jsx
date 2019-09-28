import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { addTransaction } from "../../redux/transaction/transaction.actions";

import {
	updateTransactionFormAmount,
	updateTransactionFormType,
	updateTransactionFormCategory
} from "../../redux/transaction-form/transaction-form.actions";
import {
	selectAmount,
	selectType,
	selectCategory
} from "../../redux/transaction-form/transaction-form.selector";

import { updateCategoryDropdown } from "../../redux/dropdown/dropdown.action";
import {
	selectDropdownTypes,
	selectDropdownCategories
} from "../../redux/dropdown/dropdown.selectors";

import "./transaction-input.styles.css";

import CustomInput from "../custom-input/custom-input.component";
import CustomSelect from "../custom-select/custom-select.component";
import CustomButton from "../custom-button/custom-button.component";

const TransactionInput = ({
	amount,
	type,
	category,
	types,
	categories,
	updateTransactionFormAmount,
	updateTransactionFormType,
	updateTransactionFormCategory,
	updateCategoryDropdown,
	addTransaction
}) => {
	const handleChange = event => {
		const { value, name } = event.target;

		switch (name) {
			case "amount":
				updateTransactionFormAmount(value);
				return;
			case "type":
				updateTransactionFormType(value);
				updateCategoryDropdown(value);
				return;
			case "category":
				debugger;
				updateTransactionFormCategory(value);
				return;
		}
	};

	const handleSubmit = event => {
		event.preventDefault();
		let transaction = { amount, type, category };
		addTransaction(transaction);
		updateTransactionFormAmount("");
		updateTransactionFormType("");
		updateTransactionFormCategory("");
	};

	return (
		<div className='transaction-input_container'>
			<h3>Enter your transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className='form-block'>
					<div className='form-element'>
						<CustomInput
							name={"amount"}
							type={"number"}
							label={"Amount (€):"}
							value={amount}
							handleChange={handleChange}
							placeholder={"Enter amount here"}
							required
						/>
					</div>
					<div className='form-element'>
						<CustomSelect
							name={"type"}
							label={"Type:"}
							value={type}
							options={types}
							handleChange={handleChange}
							required
						/>
					</div>
					<div className='form-element'>
						<CustomSelect
							name={"category"}
							label={"Category"}
							value={category}
							options={categories}
							handleChange={handleChange}
							required
						/>
					</div>
					<div className='submit-button'>
						<CustomButton
							type='submit'
							value={"Submit Form"}
							label={"Submit Transaction"}>
							Submit Transaction
						</CustomButton>
					</div>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	updateTransactionFormAmount: amount =>
		dispatch(updateTransactionFormAmount(amount)),
	updateTransactionFormType: type => dispatch(updateTransactionFormType(type)),
	updateTransactionFormCategory: category =>
		dispatch(updateTransactionFormCategory(category)),
	updateCategoryDropdown: type => dispatch(updateCategoryDropdown(type)),
	addTransaction: transactionItem => dispatch(addTransaction(transactionItem))
});

const mapStateToProps = createStructuredSelector({
	amount: selectAmount,
	type: selectType,
	category: selectCategory,
	types: selectDropdownTypes,
	categories: selectDropdownCategories
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TransactionInput);
