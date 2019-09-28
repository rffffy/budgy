import DropdownActionTypes from "./dropdown.types";

export const updateCategoryDropdown = type => ({
	type: DropdownActionTypes.UPDATE_DROPDOWN_CATEGORY,
	payload: type
});
