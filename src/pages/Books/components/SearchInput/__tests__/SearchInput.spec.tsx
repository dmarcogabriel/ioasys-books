import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SearchInput, SearchInputProps} from '../SearchInput';
import {ThemeProvider} from '../../../../../contexts';
import renderer from 'react-test-renderer';

const ComponentWrapper = (props: SearchInputProps) => (
  <ThemeProvider>
    <SearchInput {...props} />
  </ThemeProvider>
);
let mockOnSearchResult: string | null = null;
const mockOnSearch = jest.fn((term: string) => {
  mockOnSearchResult = term;
});

describe('Books/components/SearchInput', () => {
  it('should pass on change input', () => {
    const {getByTestId} = render(<ComponentWrapper onSearch={mockOnSearch} />);
    const searchInput = getByTestId('searchInput');

    fireEvent.changeText(searchInput, 'Test');

    expect(searchInput).toHaveProp('value', 'Test');
  });

  it('should pass on submit search', () => {
    const {getByTestId} = render(<ComponentWrapper onSearch={mockOnSearch} />);
    const searchInput = getByTestId('searchInput');
    const searchInputButton = getByTestId('searchInputButton');

    fireEvent.changeText(searchInput, 'Test 2');
    fireEvent.press(searchInputButton);
    expect(mockOnSearch).toHaveBeenCalled();
    expect(mockOnSearchResult).toBe('Test 2');
  });

  it('should match snapshot', () => {
    expect(
      renderer.create(<ComponentWrapper onSearch={mockOnSearch} />).toJSON(),
    ).toMatchSnapshot();
  });
});
