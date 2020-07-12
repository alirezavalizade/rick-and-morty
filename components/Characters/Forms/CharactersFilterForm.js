import { FIELD_ITEMS } from '@constants';
import isEqual from 'lodash.isequal';

import { useRecoilValue, useRecoilState } from 'recoil';
import * as selectors from '@state/selectors';
import * as atoms from '@state/atoms';

import { useEffect, useState, useCallback, Fragment, useMemo } from 'react';

import { Input, Select, RadioGroup } from '@components/ui';

const { GENDERS, STATUSES } = FIELD_ITEMS;

const LocationsSelect = (props) => {
  const locations = useRecoilValue(selectors.locations);

  return useMemo(() => {
    return (
      <Select
        name="locationId"
        placeholder="Select Location"
        label="Location:"
        items={locations}
        valueKey="id"
        formatOption={(item) => item.name}
        {...props}
      />
    );
  }, [locations.length]);
};

const EpisodesSelect = (props) => {
  const episodes = useRecoilValue(selectors.episodes);

  return useMemo(() => {
    return (
      <Select
        name="episodeId"
        placeholder="Select Episode"
        label="Episode:"
        items={episodes}
        valueKey="id"
        formatOption={(item) => `${item.id}. ${item.name}`}
        {...props}
      />
    );
  }, [episodes.length]);
};

const CharactersFilterForm = () => {
  const [cachedValues, changeValues] = useRecoilState(
    atoms.charactersFilterFormState
  );
  const [, changeValue] = useState(() => cachedValues);

  useEffect(() => {
    // avoid adding dependencies because of sideeffects for charactersList.js
    // just update the state on "unmount"
    return () => {
      changeValue((currentState) => {
        try {
          const filteredCached = Object.values(cachedValues).filter(Boolean);
          const filteredState = Object.values(currentState).filter(Boolean);
          if (!isEqual(filteredCached, filteredState)) {
            changeValues(currentState);
          }
        } finally {
          return currentState;
        }
      });
    };
  }, []);

  const onChangedFields = useCallback(
    (values = {}) => {
      changeValue((currentState) => ({
        ...currentState,
        ...values
      }));
    },
    [changeValue]
  );

  return (
    <>
      <Input
        name="name"
        placeholder="Name"
        label="Name:"
        type="text"
        defaultValue={cachedValues.name}
        onChange={onChangedFields}
      />
      <Input
        name="species"
        placeholder="Species"
        label="Species:"
        type="text"
        defaultValue={cachedValues.species}
        onChange={onChangedFields}
      />
      <Input
        name="type"
        placeholder="Type"
        label="Type:"
        type="text"
        defaultValue={cachedValues.species}
        onChange={onChangedFields}
      />
      <RadioGroup
        name="gender"
        label="Gender:"
        items={GENDERS}
        formatOption={(item) => item.label}
        isInline
        spacing={5}
        onChange={onChangedFields}
        defaultValue={cachedValues.gender}
      />
      <RadioGroup
        name="status"
        label="Status:"
        items={STATUSES}
        formatOption={(item) => item.label}
        isInline
        spacing={5}
        onChange={onChangedFields}
        defaultValue={cachedValues.status}
      />
      <LocationsSelect
        onChange={onChangedFields}
        defaultValue={cachedValues.locationId}
      />
      <EpisodesSelect
        onChange={onChangedFields}
        defaultValue={cachedValues.episodeId}
      />
    </>
  );
};

export default CharactersFilterForm;
