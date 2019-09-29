import { createSelector } from "reselect";

const selectTransaction = state => state.transaction;

export const selectTransactions = createSelector(
	[selectTransaction],
	transaction => transaction.transactions
);
