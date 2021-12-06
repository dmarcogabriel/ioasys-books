import React from 'react';
import {
  FiltersChipsContainer,
  FiltersChipsTitle,
  FiltersChipsOptions,
  ChipButton,
  ChipButtonText,
} from './styles';

export interface FiltersChipsProps {
  title: string;
  options: string[];
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
            isSelected={isSelected(option)}
            onPress={() => handleSelect(option)}>
            <ChipButtonText
              testID={`filtersChipsOptionText${testID}${i + 1}`}
              isSelected={isSelected(option)}>
              {option}
            </ChipButtonText>
          </ChipButton>
        ))}
      </FiltersChipsOptions>
    </FiltersChipsContainer>
  );
};
