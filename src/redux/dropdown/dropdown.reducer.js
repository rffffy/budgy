import DropdownActionTypes from "./dropdown.types";

import { updateCategoryDropdown } from "./dropdown.utils";

import dropdownData from "../../components/transaction-input/dropdown-data";

const INITIAL_STATE = {
	types: dropdownData.type,
	categories: []
};

const dropdownReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DropdownActionTypes.UPDATE_DROPDOWN_CATEGORY:
			return {
				state,
				types: state.types,
				categories: updateCategoryDropdown(action.payload)
			};
		default:
			return state;
	}
};

export default dropdownReducer;
