import { createSelector } from "reselect";
import {
	calculateTotalIncome,
	calculateTotalExpenses,
	calculateTotalBalance
} from "./transaction.utils";

const selectTransaction = state => state.transaction;

export const selectTransactions = createSelector(
	[selectTransaction],
	transaction => transaction.transactions
);

export const selectTotalIncome = createSelector(
	[selectTransactions],
	transactions => calculateTotalIncome(transactions)
);

export const selectTotalExpenses = createSelector(
	[selectTransactions],
	transactions => calculateTotalExpenses(transactions)
);

export const selectTotalBalance = createSelector(
	[selectTransactions],
	transactions => calculateTotalBalance(transactions)
);
