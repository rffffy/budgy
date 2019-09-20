import React from "react";

import "./transaction-input.styles.css";
import CustomInput from "../custom-input/custom-input.component";
import CustomSelect from "../custom-select/custom-select.component";
import CustomRadioButton from "../custom-radio-button/custom-radio-button.component";
import CustomSelectPopUp from "../custom-select/custom-select-popup.component";

const TransactionInput = () => (
	<div className='transaction-input_container'>
		<h3>Enter your transaction</h3>
		<div className='input-block'>
			<div className='input-element'>
				<CustomInput
					label={"Amount (€)"}
					placeholder={"Enter amount here"}
					type={"number"}
				/>
			</div>
			<div className='input-element'>
				<CustomRadioButton />
			</div>
			<div className='input-element'>
				<CustomSelectPopUp label={"Category"} />
			</div>
		</div>
	</div>
);

export default TransactionInput;
