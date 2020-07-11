import { useState, useEffect } from 'react';

import { FormControl, FormLabel, Select as ChakraSelect } from '@chakra-ui/core';

const Select = ({ 
	items = [], 
	name, 
	placeholder, 
	label, 
	onChange, 
	defaultValue, 
	formatOption, 
	valueKey = 'value',
	...rest
}) => {
	const [value, changeValue] = useState(() => defaultValue);

	useEffect(() => {
		if (onChange) {
			onChange({ [name]: value });
		}
	}, [name, value, onChange]);
    
	return (
		<FormControl marginBottom="30px">
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<ChakraSelect
				{...rest}
				placeholder={placeholder} 
				name={name} 
				onChange={e => changeValue(e.target.value)}
				value={value}
				focusBorderColor="customGreen"
				backgroundColor="fadedHaiti"
			>
				{items.map(item => {
					return (
						<option 
							key={item[valueKey]} 
							value={item[valueKey]} 
						>
							{formatOption(item)}
						</option>
					);
				})}
			</ChakraSelect>
		</FormControl>
	);
};

export default Select;