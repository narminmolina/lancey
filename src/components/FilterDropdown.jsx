import { useCallback, useRef, useState } from 'react';

export const FilterDropdown = ({}) => {
	const [selectedValue, setSelectedValue] = useState(null);

	const handleCheckedFilter = useCallback(event => {
		const filterValue = event.target.value;
		setSelectedValue(filterValue);
    
	});
};
