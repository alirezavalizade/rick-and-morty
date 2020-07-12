import { useRecoilState } from 'recoil';
import * as atoms from '@state/atoms';
import { useMemo } from 'react';

import { Box, Heading, IconButton, Stack, Button } from '@chakra-ui/core';

import GearIcon from '@public/vectors/gear.svg';

const CharacterListHeading = () => {
  const [visibility, changeVisibility] = useRecoilState(
    atoms.modalVisibilityState
  );
  const [filters, changeValues] = useRecoilState(
    atoms.charactersFilterFormState
  );

  return useMemo(() => {
    const filtersKeys = Object.keys(filters);
    return (
      <Box marginBottom="20px" d="flex" alignItems="center" isTruncated>
        <Stack isInline d="flex" alignItems="center">
          <Heading
            as="h1"
            fontSize={[30, 35]}
            letterSpacing="2px"
            color="customGreen"
          >
            Characters
          </Heading>
          {filtersKeys.map((key) => {
            if (!filters[key]) {
              return null;
            }
            return (
              <Button
                key={key}
                size="xs"
                variant="outline"
                variantColor="green"
                borderColor="customGreen"
                borderWidth="2px"
                leftIcon="close"
                backgroundColor="haiti"
                onClick={() => {
                  changeValues({
                    ...filters,
                    [key]: undefined
                  });
                }}
              >
                {key}: {filters[key]}
              </Button>
            );
          })}
        </Stack>
        <Box marginLeft="auto">
          <IconButton
            variant="outline"
            variantColor="teal"
            color="customGreen"
            aria-label="Gear"
            fontSize="20px"
            icon={GearIcon}
            rounded="full"
            onClick={() => changeVisibility(!visibility)}
          />
        </Box>
      </Box>
    );
  }, [visibility, filters]);
};

export default CharacterListHeading;
