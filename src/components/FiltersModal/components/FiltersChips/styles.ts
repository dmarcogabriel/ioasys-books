import styled, {css} from 'styled-components/native';
import {ThemeProps} from '../../../../@types/theme.interface';

export const FiltersChipsContainer = styled.View`
  margin: 16px 0;
`;

export const FiltersChipsTitle = styled.Text`
  color: ${({theme}: ThemeProps) => theme.colors.dark};
  font-size: 12px;
  font-weight: bold;
  margin: 4px 0;
`;

export const FiltersChipsOptions = styled.View`
  flex-direction: row;
  margin: 4px 0;
`;

interface ChipButtonProps {
  isSelected: boolean;
}

export const ChipButton = styled.TouchableOpacity`
  margin: 0 4px;
  ${({theme, isSelected}: ThemeProps & ChipButtonProps) => css`
    background: ${isSelected ? theme.colors.dark : theme.colors.light};
    border: 1px solid ${theme.colors.dark};
  `};
  border-radius: 20px;
  padding: 8px 20px;
  align-items: center;
  justify-content: center;
`;

export const ChipButtonText = styled.Text`
  ${({theme, isSelected}: ThemeProps & ChipButtonProps) => css`
    color: ${isSelected ? theme.colors.light : theme.colors.dark};
  `};
  font-size: 12px;
`;
