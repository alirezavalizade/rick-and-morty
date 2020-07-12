import { useRecoilState } from 'recoil';
import * as atoms from '@state/atoms';

import { Suspense, useCallback } from 'react';
import {
  SlideIn,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  Button
} from '@chakra-ui/core';
import { CharactersFilterForm } from '@components/Characters';

const CharactersFilterModal = () => {
  const [visibility, changeVisibility] = useRecoilState(
    atoms.modalVisibilityState
  );
  const [, changeValues] = useRecoilState(atoms.charactersFilterFormState);

  const closeModal = useCallback(() => {
    changeVisibility(false);
  }, []);

  return (
    <SlideIn in={visibility}>
      {(styles) => {
        return (
          <Modal onClose={closeModal} isOpen size="lg">
            <ModalOverlay opacity={styles.opacity} />
            <ModalContent backgroundColor="haiti" rounded="lg" {...styles}>
              <ModalHeader>Filter Characters</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Suspense fallback="loading...">
                  <CharactersFilterForm />
                </Suspense>
              </ModalBody>
              <ModalFooter>
                <Stack isInline>
                  <Button
                    variantColor="red"
                    variant="outline"
                    onClick={() => {
                      changeValues({});
                      closeModal();
                    }}
                  >
                    Reset
                  </Button>
                  <Button
                    variantColor="green"
                    backgroundColor="customGreen"
                    onClick={closeModal}
                  >
                    Search
                  </Button>
                </Stack>
              </ModalFooter>
            </ModalContent>
          </Modal>
        );
      }}
    </SlideIn>
  );
};

export default CharactersFilterModal;
