import TransactionActionTypes from "./transaction.types";

export const fetchTransactions = () => ({
	type: TransactionActionTypes.FETCH_TRANSACTIONS
});

export const addTransaction = transaction => ({
	type: TransactionActionTypes.ADD_TRANSACTION,
	payload: transaction
});
