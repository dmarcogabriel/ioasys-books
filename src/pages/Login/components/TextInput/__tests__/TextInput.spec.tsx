import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TextInput, TextInputProps} from '../TextInput';
import {ThemeProvider} from '../../../../../contexts';

const ComponentWrapper = (props: TextInputProps) => (
  <ThemeProvider>
    <TextInput {...props} />
  </ThemeProvider>
);

let mockValue = '';
const mockChangeFn = jest.fn((value: string) => {
  mockValue = value;
});

beforeEach(() => {
  mockValue = '';
});

describe('Login/components/TextInput', () => {
  it('should pass on change text input', () => {
    const {getByTestId} = render(
      <ComponentWrapper label="test" value="" onChange={mockChangeFn} />,
    );
    const textInput = getByTestId('textInput');
    fireEvent.changeText(textInput, 'test');

    expect(mockChangeFn).toHaveBeenCalled();
    expect(mockValue).toBe('test');
  });

  it('should pass on render right component', () => {
    const {getByTestId} = render(
      <ComponentWrapper
        label="test"
        value=""
        onChange={mockChangeFn}
        RightComponent={<></>}
      />,
    );
    const textInputRightComponent = getByTestId('textInputRightComponent');

    expect(textInputRightComponent).toBeDefined();
  });

  // todo: add snapshot test here
});
