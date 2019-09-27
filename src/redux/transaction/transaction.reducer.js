import TransactionActionTypes from "./transaction.types";

import { addTransaction } from "./transaction.utils";

const INITIAL_STATE = {
	transactions: []
};

const transactionReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TransactionActionTypes.ADD_TRANSACTION:
			return {
				...state,
				transactions: addTransaction(state.transactions, action.payload)
			};
		default:
			return state;
	}
};

export default transactionReducer;
