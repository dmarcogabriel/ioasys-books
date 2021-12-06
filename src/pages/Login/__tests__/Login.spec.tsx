import React from 'react';
import {Login} from '../Login';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {ThemeProvider} from '../../../contexts';
import renderer from 'react-test-renderer';

const mockLogin = jest.fn((data: any) => data);
jest.mock('../../../hooks', () => ({
  useUser: () => ({
    login: mockLogin,
  }),
}));

const LoginComponent = () => (
  <ThemeProvider>
    <Login />
  </ThemeProvider>
);

describe('pages/Login', () => {
  it('should fail login', async () => {
    const {getByTestId} = render(<LoginComponent />);

    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginButton = getByTestId('loginButton');
    await waitFor(() => fireEvent.changeText(emailInput, 'wrong_email'));
    await waitFor(() => fireEvent.changeText(passwordInput, ''));
    await waitFor(() => fireEvent.press(loginButton));

    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('should pass login', async () => {
    const {getByTestId} = render(<LoginComponent />);

    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginButton = getByTestId('loginButton');
    await waitFor(() => fireEvent.changeText(emailInput, 'test@email.com'));
    await waitFor(() => fireEvent.changeText(passwordInput, '123456'));
    await waitFor(() => fireEvent.press(loginButton));

    expect(mockLogin).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(renderer.create(<LoginComponent />).toJSON()).toMatchSnapshot();
  });
});
