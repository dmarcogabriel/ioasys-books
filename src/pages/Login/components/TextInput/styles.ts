import styled from 'styled-components/native';
import {Text} from 'react-native-elements';
import {ThemeProps} from '../../../../types/theme.interface';
import {StyleSheet} from 'react-native';

export const TextInputContainer = styled.View`
  background: #00000052;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 8px 0;
`;

export const Label = styled(Text)`
  color: ${({theme}: ThemeProps) => theme.colors.light};
  opacity: 0.5;
`;

export const InputWrapper = styled.View``;

export const RightComponentWrapper = styled.View`
  position: absolute;
  right: 0;
  justify-content: center;
  padding: 16px;
  height: 100%;
`;

export default StyleSheet.create({
  input: {
    fontSize: 16,
    color: '#fff',
  },
});
