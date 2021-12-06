import styled, {css} from 'styled-components/native';
import {Text} from 'react-native-elements';
import {ThemeProps} from '../../../../@types/theme.interface';

export const BookInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface BookInfoTextProps {
  isBold: boolean;
}

export const BookInfoText = styled(Text)`
  ${({theme, isBold}: ThemeProps & BookInfoTextProps) => css`
    color: ${isBold ? theme.colors.dark : theme.colors.grey};
    font-weight: ${isBold ? 'bold' : 'normal'};
  `}
`;
