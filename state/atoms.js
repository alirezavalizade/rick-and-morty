import { atom } from 'recoil';

export const modalVisibilityState = atom({
  key: 'modalVisibilityState',
  default: false
});

export const charactersFilterFormState = atom({
  key: 'charactersFilterFormState',
  default: {}
});
