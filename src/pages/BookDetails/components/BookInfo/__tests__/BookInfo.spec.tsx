import React from 'react';
import {render} from '@testing-library/react-native';
import {BookInfo, BookInfoProps} from '../BookInfo';
import {ThemeProvider} from '../../../../../contexts';
import renderer from 'react-test-renderer';

const ComponentWrapper = (props: BookInfoProps) => (
  <ThemeProvider>
    <BookInfo {...props} />
  </ThemeProvider>
);

describe('Books/components/BookCard', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(
      <ComponentWrapper name="Test" value="Is Test" />,
    );
    const bookInfoName = getByTestId('bookInfoName');
    const bookInfoValue = getByTestId('bookInfoValue');

    expect(bookInfoName).toHaveProp('isBold', true);
    expect(bookInfoValue).toHaveProp('isBold', false);
    expect(bookInfoName.children[0]).toBe('Test');
    expect(bookInfoValue.children[0]).toBe('Is Test');
  });

  it('should match snapshot', () => {
    expect(
      renderer
        .create(<ComponentWrapper name="Test" value="Is Test" />)
        .toJSON(),
    ).toMatchSnapshot();
  });
});
