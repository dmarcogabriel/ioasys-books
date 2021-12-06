import React from 'react';
import {
  FiltersChipsContainer,
  FiltersChipsTitle,
  FiltersChipsOptions,
  ChipButton,
  ChipButtonText,
} from './styles';

interface FiltersChipsProps {
  title: string;
  options: string[];
  value: string | null;
  onChange: (option: string) => void;
}

export const FiltersChips = ({
  title,
  options,
  value,
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
      <FiltersChipsTitle>{title}</FiltersChipsTitle>
      <FiltersChipsOptions>
        {options.map((option, i) => (
          <ChipButton
            key={`${i}`}
            isSelected={isSelected(option)}
            onPress={() => handleSelect(option)}>
            <ChipButtonText isSelected={isSelected(option)}>
              {option}
            </ChipButtonText>
          </ChipButton>
        ))}
      </FiltersChipsOptions>
    </FiltersChipsContainer>
  );
};
