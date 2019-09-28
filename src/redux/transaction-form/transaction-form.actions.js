import TransactionFormActionTypes from "./transaction-form.types";

export const updateTransactionFormAmount = amount => ({
	type: TransactionFormActionTypes.UPDATE_TRANSACTIONFORM_AMOUNT,
	payload: amount
});

export const updateTransactionFormType = type => ({
	type: TransactionFormActionTypes.UPDATE_TRANSACTIONFORM_TYPE,
	payload: type
});

export const updateTransactionFormCategory = category => ({
	type: TransactionFormActionTypes.UPDATE_TRANSACTIONFORM_CATEGORY,
	payload: category
});
