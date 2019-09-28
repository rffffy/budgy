import { createSelector } from "reselect";

const selectFormData = state => state.transactionForm;

export const selectAmount = createSelector(
	[selectFormData],
	formData => formData.amount
);

export const selectType = createSelector(
	[selectFormData],
	formData => formData.type
);

export const selectCategory = createSelector(
	[selectFormData],
	formData => formData.category
);
