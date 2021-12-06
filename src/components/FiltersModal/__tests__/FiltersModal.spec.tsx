import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {FiltersModal, FiltersModalProps} from '../FiltersModal';
import {ThemeProvider} from '../../../contexts';
import renderer from 'react-test-renderer';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

const ComponentWrapper = (props: FiltersModalProps) => (
  <ThemeProvider>
    <FiltersModal {...props} />
  </ThemeProvider>
);

let mockSelectedOption: any | null;
const mockOnClose = jest.fn((filters: any | null) => {
  mockSelectedOption = filters;
});

beforeEach(() => {
  mockSelectedOption = null;
});

describe('components/FiltersModal', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(
      <ComponentWrapper onClose={mockOnClose} isVisible />,
    );
    const filtersModal = getByTestId('filtersModal');

    expect(filtersModal).toHaveProp('isVisible', true);
  });

  it('should render correctly not visible', () => {
    const {getByTestId} = render(
      <ComponentWrapper onClose={mockOnClose} isVisible={false} />,
    );
    const filtersModal = getByTestId('filtersModal');

    expect(filtersModal).toHaveProp('isVisible', false);
  });

  it('should pass on press close button', () => {
    const {getByTestId} = render(
      <ComponentWrapper onClose={mockOnClose} isVisible />,
    );
    fireEvent.press(getByTestId('closeButton'));

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockSelectedOption).toBe(null);
  });

  it('should pass on press filter button', () => {
    const {getByTestId} = render(
      <ComponentWrapper onClose={mockOnClose} isVisible />,
    );
    fireEvent.press(getByTestId('filterButton'));

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockSelectedOption.category).toBe(null);
    expect(mockSelectedOption.year).toBe(null);
  });

  it('should pass on change filter', () => {
    const {getByTestId} = render(
      <ComponentWrapper onClose={mockOnClose} isVisible />,
    );
    fireEvent.press(getByTestId('filtersChipsOptionButtonCategory2'));
    fireEvent.press(getByTestId('filtersChipsOptionButtonYear2'));
    fireEvent.press(getByTestId('filterButton'));

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockSelectedOption.category).toBe('UX Design');
    expect(mockSelectedOption.year).toBe('2000');
  });

  it('should pass on press same option', () => {
    const {getByTestId} = render(
      <ComponentWrapper onClose={mockOnClose} isVisible />,
    );
    const filterButton = getByTestId('filterButton');
    const filtersChipsOptionButtonCategory2 = getByTestId(
      'filtersChipsOptionButtonCategory2',
    );
    fireEvent.press(filtersChipsOptionButtonCategory2);
    fireEvent.press(filterButton);

    expect(mockOnClose).toHaveBeenCalled();
    expect(mockSelectedOption.category).toBe('UX Design');

    fireEvent.press(filtersChipsOptionButtonCategory2);
    fireEvent.press(filterButton);
    expect(mockSelectedOption.category).toBe(null);
  });

  it('should match snapshot', () => {
    expect(
      renderer
        .create(<ComponentWrapper onClose={mockOnClose} isVisible />)
        .toJSON(),
    ).toMatchSnapshot();
  });
});
