import { createSelector } from "reselect";

const selectDropdown = state => state.dropdown;

export const selectDropdownTypes = createSelector(
	[selectDropdown],
	dropdown => dropdown.types
);

export const selectDropdownCategories = createSelector(
	[selectDropdown],
	dropdown => dropdown.categories
);
