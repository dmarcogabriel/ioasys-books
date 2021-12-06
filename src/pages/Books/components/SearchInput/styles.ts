import styled from 'styled-components/native';

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #33333333;
  width: 90%;
  border-radius: 2px;
`;

export const SearchInputStyled = styled.TextInput`
  padding: 16px 46px 16px 8px;
  width: 100%;
`;

export const SearchInputButton = styled.TouchableOpacity`
  margin: 16px;
  position: absolute;
  right: 0;
`;
