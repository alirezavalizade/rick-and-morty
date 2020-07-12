import { useState, useEffect } from 'react';

import {
  FormControl,
  FormLabel,
  RadioGroup as ChakraRadioGroup,
  Radio
} from '@chakra-ui/core';

const RadioGroup = ({
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
      <ChakraRadioGroup
        {...rest}
        placeholder={placeholder}
        name={name}
        onChange={(e) => changeValue(e.target.value)}
        value={value}
      >
        {items.map((item) => {
          return (
            <Radio
              color="customGreen"
              key={item[valueKey]}
              value={item[valueKey]}
            >
              {formatOption(item)}
            </Radio>
          );
        })}
      </ChakraRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
