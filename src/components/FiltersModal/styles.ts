import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../@types/theme.interface';

export default StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export const FiltersModalContainer = styled.ScrollView`
  background: ${({theme}: ThemeProps) => theme.colors.light};
  border-radius: 4px;
  padding: 16px 16px 24px;
  width: 100%;
`;

export const FiltersModalHeader = styled.View`
  align-items: flex-end;
`;

export const CloseButtonWrapper = styled.TouchableOpacity`
  border-radius: 100px;
  border: 1px solid #33333333;
  padding: 9px;
`;

export const FiltersModalFooter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FilterButton = styled.TouchableOpacity`
  border: 1px solid ${({theme}: ThemeProps) => theme.colors.primary};
  border-radius: 20px;
  padding: 8px 20px;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`;

export const FilterButtonText = styled.Text`
  color: ${({theme}: ThemeProps) => theme.colors.primary};
  font-size: 16px;
`;
