import React from 'react';
import {HeaderTitle, HeaderTitleProps} from '../HeaderTitle';
import {render} from '@testing-library/react-native';
import {ThemeProvider} from '../../../contexts';
import renderer from 'react-test-renderer';

const mockLogin = jest.fn((data: any) => data);
jest.mock('../../../hooks', () => ({
  useUser: () => ({
    login: mockLogin,
  }),
}));

const ComponentWrapper = (props: HeaderTitleProps) => (
  <ThemeProvider>
    <HeaderTitle {...props} />
  </ThemeProvider>
);

describe('components/HeaderTitle', () => {
  it('should pass on render header title dark', async () => {
    const {getByTestId} = render(<ComponentWrapper color="dark" />);

    const headerTitle = getByTestId('headerTitle');

    expect(headerTitle.children[0]).toBe('Books');
    expect(headerTitle).toHaveProp('color', 'dark');
  });

  it('should pass on render header title light', async () => {
    const {getByTestId} = render(<ComponentWrapper color="light" />);

    const headerTitle = getByTestId('headerTitle');

    expect(headerTitle.children[0]).toBe('Books');
    expect(headerTitle).toHaveProp('color', 'light');
  });

  it('should match snapshot', () => {
    expect(
      renderer.create(<ComponentWrapper color="light" />).toJSON(),
    ).toMatchSnapshot();
  });
});
