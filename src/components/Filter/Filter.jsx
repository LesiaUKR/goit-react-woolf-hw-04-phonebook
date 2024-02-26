import React from 'react';
import { FilterField, FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterField
        type="text"
        name="filter"
        required
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  );
};
