import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {FiltersChips, FiltersChipsProps, Option} from '../FiltersChips';
import {ThemeProvider} from '../../../../../contexts';
import renderer from 'react-test-renderer';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

const ComponentWrapper = (props: FiltersChipsProps) => (
  <ThemeProvider>
    <FiltersChips {...props} />
  </ThemeProvider>
);

let mockSelectedOption: string | null;
const mockOnChange = jest.fn((option: string | null) => {
  mockSelectedOption = option;
});
const mockTitle = 'Test';
const mockOptions = ['option 1', 'option 2', 'option 3'];

const mockOptionsMapper = (options: string[]): Option[] => {
  return options.map(option => ({
    name: option,
    value: option,
  }));
};

describe('components/FiltersModal/components/FiltersChips', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(
      <ComponentWrapper
        title={mockTitle}
        options={mockOptionsMapper(mockOptions)}
        onChange={mockOnChange}
        value=""
      />,
    );
    const filtersChipsTitle = getByTestId('filtersChipsTitle');
    const filtersChipsOptions = getByTestId('filtersChipsOptions');
    const filtersChipsOptionText1 = getByTestId('filtersChipsOptionText1');
    const filtersChipsOptionText2 = getByTestId('filtersChipsOptionText2');
    const filtersChipsOptionText3 = getByTestId('filtersChipsOptionText3');

    expect(filtersChipsTitle.children[0]).toBe('Test');
    expect(filtersChipsOptions.children).toHaveLength(3);
    expect(filtersChipsOptionText1.children[0]).toBe('option 1');
    expect(filtersChipsOptionText2.children[0]).toBe('option 2');
    expect(filtersChipsOptionText3.children[0]).toBe('option 3');
  });

  it('should render correctly with selected option', () => {
    const {getByTestId} = render(
      <ComponentWrapper
        value="option 2"
        title={mockTitle}
        options={mockOptionsMapper(mockOptions)}
        onChange={mockOnChange}
      />,
    );
    const filtersChipsOptionText1 = getByTestId('filtersChipsOptionText1');
    const filtersChipsOptionText2 = getByTestId('filtersChipsOptionText2');
    const filtersChipsOptionText3 = getByTestId('filtersChipsOptionText3');

    expect(filtersChipsOptionText1).toHaveProp('isSelected', false);
    expect(filtersChipsOptionText2).toHaveProp('isSelected', true);
    expect(filtersChipsOptionText3).toHaveProp('isSelected', false);
  });

  it('should pass on select option', () => {
    const {getByTestId} = render(
      <ComponentWrapper
        value=""
        title={mockTitle}
        options={mockOptionsMapper(mockOptions)}
        onChange={mockOnChange}
      />,
    );
    fireEvent.press(getByTestId('filtersChipsOptionButton2'));

    expect(mockOnChange).toHaveBeenCalled();
    expect(mockSelectedOption).toBe('option 2');
  });

  it('should match snapshot', () => {
    expect(
      renderer
        .create(
          <ComponentWrapper
            title={mockTitle}
            options={mockOptionsMapper(mockOptions)}
            value="option 1"
            onChange={mockOnChange}
          />,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
