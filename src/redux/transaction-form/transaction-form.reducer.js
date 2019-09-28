import TransactionFormActionTypes from "./transaction-form.types";

const INITIAL_STATE = {
	amount: "",
	type: "",
	category: ""
};

const transactionFormReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TransactionFormActionTypes.UPDATE_TRANSACTIONFORM_AMOUNT:
			return {
				...state,
				amount: action.payload
			};
		case TransactionFormActionTypes.UPDATE_TRANSACTIONFORM_TYPE:
			return {
				...state,
				type: action.payload
			};
		case TransactionFormActionTypes.UPDATE_TRANSACTIONFORM_CATEGORY:
			return {
				...state,
				category: action.payload
			};
		default:
			return state;
	}
};

export default transactionFormReducer;
