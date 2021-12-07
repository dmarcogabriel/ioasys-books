import React from 'react';
import {
  FiltersChipsContainer,
  FiltersChipsTitle,
  FiltersChipsOptions,
  ChipButton,
  ChipButtonText,
} from './styles';

export interface Option {
  name: string;
  value: string;
}

export interface FiltersChipsProps {
  title: string;
  options: Option[];
  value: string | null;
  onChange: (option: string) => void;
  testID?: string;
}

export const FiltersChips = ({
  title,
  options,
  value,
  testID = '',
  onChange,
}: FiltersChipsProps): JSX.Element => {
  const isSelected = (option: string): boolean => {
    return !!value && value === option;
  };

  const handleSelect = (option: string): void => {
    onChange(option);
  };

  return (
    <FiltersChipsContainer>
      <FiltersChipsTitle testID="filtersChipsTitle">{title}</FiltersChipsTitle>
      <FiltersChipsOptions testID="filtersChipsOptions">
        {options.map((option, i) => (
          <ChipButton
            key={`${i}`}
            testID={`filtersChipsOptionButton${testID}${i + 1}`}
            isSelected={isSelected(option.value)}
            onPress={() => handleSelect(option.value)}>
            <ChipButtonText
              testID={`filtersChipsOptionText${testID}${i + 1}`}
              isSelected={isSelected(option.value)}>
              {option.name}
            </ChipButtonText>
          </ChipButton>
        ))}
      </FiltersChipsOptions>
    </FiltersChipsContainer>
  );
};
