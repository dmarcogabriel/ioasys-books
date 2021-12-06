import styled from 'styled-components/native';
import {ThemeProps} from '../../@types/theme.interface';
import {Text} from 'react-native-elements';

export const BookDetailsContainer = styled.ScrollView`
  background: ${({theme}: ThemeProps) => theme.colors.light};
  flex: 1;
  padding: 0 40px;
`;

export const BookDetailsImage = styled.Image`
  height: 351px;
  width: 240px;
  align-self: center;
  margin: 12px 0;
`;

interface ContentSectionProps {
  marginBottom?: string;
}

export const ContentSection = styled.View`
  margin-top: 8px;
  margin-bottom: ${({marginBottom = '8px'}: ContentSectionProps) =>
    marginBottom};
`;

export const ContentSectionTitle = styled(Text)`
  color: ${({theme}: ThemeProps) => theme.colors.dark};
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 20px;
`;

export const ContentSectionReview = styled(Text)`
  color: ${({theme}: ThemeProps) => theme.colors.grey};
  font-size: 12px;
  line-height: 20px;
`;

export const BookDetailsTitle = styled(Text)`
  color: ${({theme}: ThemeProps) => theme.colors.dark};
  font-size: 28px;
  font-weight: bold;
  margin-top: 12px;
`;

export const BookDetailsAuthors = styled(Text)`
  color: ${({theme}: ThemeProps) => theme.colors.primary};
  font-size: 12px;
  margin-bottom: 24px;
`;
