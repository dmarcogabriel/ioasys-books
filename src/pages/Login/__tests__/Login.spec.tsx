import React from 'react';
import {Login, LoginInput} from '../Login';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {ThemeProvider} from '../../../contexts';
import renderer from 'react-test-renderer';
import {User} from '../../../@types/user.interface';

interface ApiPostResponse {
  data: User;
  headers: any;
}

let mockUrl: string;
let mockData: LoginInput;
jest.mock('../../../services/api', () => ({
  post: jest.fn((url: string, data: LoginInput): Promise<ApiPostResponse> => {
    mockUrl = url;
    mockData = data;
    return Promise.resolve({
      data: {
        id: 'test',
        name: 'Tester User',
        email: 'test@email.com',
        birthdate: '1992',
        gender: 'T',
      },
      headers: {
        authorization: 'test',
      },
    });
  }),
}));

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
    expect(mockUrl).toBe('/auth/sign-in');
    expect(mockData.email).toBe('test@email.com');
    expect(mockData.password).toBe('123456');
  });

  it('should match snapshot', () => {
    expect(renderer.create(<LoginComponent />).toJSON()).toMatchSnapshot();
  });
});
