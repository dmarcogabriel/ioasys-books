import styled from 'styled-components/native';
import {ThemeProps} from '../../@types/theme.interface';

export const LoginContainer = styled.ImageBackground`
  height: 100%;
  justify-content: center;
  padding: 0 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  background: ${({theme}: ThemeProps) => theme.colors.light};
  border-radius: 20px;
  padding: 8px 20px;
  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: ${({theme}: ThemeProps) => theme.colors.primary};
  font-size: 16px;
`;
