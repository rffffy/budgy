import React from "react";

import "./transaction-input.styles.css";
import CustomInput from "../custom-input/custom-input.component";
import CustomRadioButton from "../custom-radio-button/custom-radio-button.component";
import CustomSelectPopUp from "../custom-select-popup/custom-select-popup.component";
import CustomSelect from "../custom-select/custom-select.component";

const TransactionInput = () => (
	<div className='transaction-input_container'>
		<h3>Enter your transaction</h3>
		<div className='form-block'>
			<div className='form-element'>
				<CustomInput
					label={"Amount (€):"}
					placeholder={"Enter amount here"}
					type={"number"}
				/>
			</div>
			<div className='form-element'>
				<CustomSelect label={"Type:"} />
			</div>
			<div className='form-element'>
				<CustomSelect label={"Category"} />
			</div>
		</div>
	</div>
);

export default TransactionInput;
