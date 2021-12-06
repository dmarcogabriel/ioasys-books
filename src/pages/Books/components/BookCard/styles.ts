import styled from 'styled-components/native';
import {Text} from 'react-native-elements';
import {ThemeProps} from '../../../../@types/theme.interface';

export const BookCardContent = styled.View`
  flex-direction: row;
`;

export const BookCardImage = styled.Image`
  width: 81px;
  height: 122px;
  margin-right: 16px;
`;

export const BookTitle = styled(Text)`
  font-size: 14px;
  color: ${({theme}: ThemeProps) => theme.colors.dark};
  font-weight: bold;
`;

export const BookAuthor = styled(Text)`
  font-size: 12px;
  color: ${({theme}: ThemeProps) => theme.colors.primary};
`;

export const BookInfo = styled.View`
  margin-top: 8px;
`;

export const BookInfoText = styled(Text)`
  font-size: 12px;
  color: ${({theme}: ThemeProps) => theme.colors.grey};
`;
