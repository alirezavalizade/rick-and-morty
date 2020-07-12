import { useState, useEffect, useMemo } from 'react';

import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/core';

const Input = ({ name, label, onChange, defaultValue, ...rest }) => {
  const [value, changeValue] = useState(() => defaultValue || '');

  useEffect(() => {
    if (onChange) {
      onChange({ [name]: value });
    }
  }, [name, value, onChange]);

  return useMemo(() => {
    return (
      <FormControl marginBottom="30px">
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <ChakraInput
          focusBorderColor="customGreen"
          backgroundColor="fadedHaiti"
          {...rest}
          name={name}
          value={value}
          autoComplete="off"
          onChange={(e) => changeValue(e.target.value)}
        />
      </FormControl>
    );
  }, [value, name, label, rest]);
};

export default Input;
