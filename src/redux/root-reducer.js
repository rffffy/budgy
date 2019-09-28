import { combineReducers } from "redux";

import transactionReducer from "./transaction/transaction.reducer";
import transactionFormReducer from "./transaction-form/transaction-form.reducer";
import dropdownReducer from "./dropdown/dropdown.reducer";

const rootReducer = combineReducers({
	transaction: transactionReducer,
	transactionForm: transactionFormReducer,
	dropdown: dropdownReducer
});

export default rootReducer;
