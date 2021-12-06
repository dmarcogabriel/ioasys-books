import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {BooksHeader} from '../BooksHeader';
import {ThemeProvider} from '../../../../../contexts';
import renderer from 'react-test-renderer';

const mockLogout = jest.fn();
jest.mock('../../../../../hooks', () => ({
  useUser: () => ({
    logout: mockLogout,
  }),
}));

const ComponentWrapper = () => (
  <ThemeProvider>
    <BooksHeader />
  </ThemeProvider>
);

describe('Books/components/BooksHeader', () => {
  it('should pass on click logout', () => {
    const {getByTestId} = render(<ComponentWrapper />);
    const logoutButton = getByTestId('logoutButton');
    fireEvent.press(logoutButton);
    expect(mockLogout).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(renderer.create(<ComponentWrapper />).toJSON()).toMatchSnapshot();
  });
});
