import dropdownData from "../../components/transaction-input/dropdown-data";

export const updateCategoryDropdown = type => {
	let categories = [];

	type !== ""
		? (categories = [...dropdownData.category[type]])
		: (categories.length = 0);

	return categories;
};
