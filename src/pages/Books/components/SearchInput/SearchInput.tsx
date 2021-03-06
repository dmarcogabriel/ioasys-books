import React, {useState} from 'react';
import {
  SearchInputContainer,
  SearchInputStyled,
  SearchInputButton,
} from './styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';

export interface SearchInputProps {
  onSearch: (term: string) => void;
}

export const SearchInput = ({onSearch}: SearchInputProps): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleChange = (term: string) => setValue(term);

  const handleSearch = () => onSearch(value);

  return (
    <SearchInputContainer>
      <SearchInputStyled
        testID="searchInput"
        placeholder="Procure um livro"
        value={value}
        onChangeText={handleChange}
        onEndEditing={handleSearch}
      />
      <SearchInputButton testID="searchInputButton" onPress={handleSearch}>
        <MIcon name="search" size={24} />
      </SearchInputButton>
    </SearchInputContainer>
  );
};
