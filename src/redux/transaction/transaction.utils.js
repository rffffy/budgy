export const addTransaction = (transactions, transactionToAdd) => {
	return [...transactions, transactionToAdd];
};

export const calculateTotalIncome = transactions =>
	transactions
		.filter(trx => trx.type.toLowerCase() === "income")
		.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

export const calculateTotalExpenses = transactions =>
	transactions
		.filter(trx => trx.type.toLowerCase() === "expense")
		.reduce((total, transaction) => total + parseFloat(transaction.amount), 0);

export const calculateTotalBalance = transactions => {
	let totalIncome = calculateTotalIncome(transactions);
	let totalExpense = calculateTotalExpenses(transactions);

	return totalIncome - totalExpense;
};
