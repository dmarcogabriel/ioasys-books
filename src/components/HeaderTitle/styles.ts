import styled from 'styled-components/native';
import {ThemeProps} from '../../types/theme.interface';

interface HeaderTitleContainerProps {
  noPadding: boolean;
  noMargin: boolean;
}

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({noMargin}: HeaderTitleContainerProps) =>
    noMargin ? 0 : '48px'};
  padding-top: ${({noPadding}: HeaderTitleContainerProps) =>
    noPadding ? 0 : '40px'};
`;

export const Logo = styled.Image``;

interface HeaderTextProps {
  color: 'light' | 'dark';
}

export const HeaderText = styled.Text`
  color: ${({theme, color}: ThemeProps & HeaderTextProps) =>
    theme.colors[color]};
  margin-left: 16px;
  font-size: 28px;
`;
