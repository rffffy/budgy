import React from "react";

import "./transaction-input.styles.css";
import CustomInput from "../custom-input/custom-input.component";
import CustomRadioButton from "../custom-radio-button/custom-radio-button.component";
import CustomSelectPopUp from "../custom-select-popup/custom-select-popup.component";
import CustomSelect from "../custom-select/custom-select.component";
import CustomButton from "../custom-button/custom-button.component";

class TransactionInput extends React.Component {
	constructor() {
		super();

		this.state = {
			transactions: [],
			amount: "",
			type: "",
			category: ""
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		let transaction = {};
		let { amount, type, category } = this.state;

		transaction = { amount, type, category };

		this.setState(prevState => {
			let { transactions } = prevState;
			transactions.push(transaction);

			return { transactions, amount: "", type: "", category: "" };
		});
	};

	render() {
		return (
			<div className='transaction-input_container'>
				<h3>Enter your transaction</h3>
				<form onSubmit={this.handleSubmit}>
					<div className='form-block'>
						<div className='form-element'>
							<CustomInput
								name={"amount"}
								type={"number"}
								label={"Amount (€):"}
								value={this.state.amount}
								handleChange={this.handleChange}
								placeholder={"Enter amount here"}
								required
							/>
						</div>
						<div className='form-element'>
							<CustomSelect
								name={"type"}
								label={"Type:"}
								value={this.state.type}
								handleChange={this.handleChange}
								required
							/>
						</div>
						<div className='form-element'>
							<CustomSelect
								name={"category"}
								label={"Category"}
								value={this.state.category}
								handleChange={this.handleChange}
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
	}
}

export default TransactionInput;
