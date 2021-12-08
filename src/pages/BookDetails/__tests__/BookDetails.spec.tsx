import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {BookDetails} from '../BookDetails';
import {ThemeProvider} from '../../../contexts';
import {Book} from '../../../types/book.interface';
import renderer from 'react-test-renderer';

const mockBook: Book = {
  title: 'Test Book',
  authors: ['Author 1', 'Author 2'],
  pageCount: 123,
  publisher: 'Tester',
  published: 1992,
  imageUrl: 'test.png',
  id: 'test',
  description: 'Testing',
  category: 'Test',
  isbn10: 'test-10',
  isbn13: 'test-13',
  language: 'test',
};

jest.mock('../../../services/api', () => ({
  get: jest.fn(() => ({
    data: mockBook,
  })),
}));

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {id: 'test'},
  }),
}));

const ComponentWrapper = () => (
  <ThemeProvider>
    <BookDetails />
  </ThemeProvider>
);

describe('pages/BookDetails', () => {
  it('should render correctly', async () => {
    const {getByTestId} = await waitFor(() => render(<ComponentWrapper />));

    const bookDetailsImage = getByTestId('bookDetailsImage');
    const bookDetailsTitle = getByTestId('bookDetailsTitle');
    const bookDetailsAuthors = getByTestId('bookDetailsAuthors');
    const bookDetailsReview = getByTestId('bookDetailsReview');

    expect(bookDetailsImage).toHaveProp('source', {uri: 'test.png'});
    expect(bookDetailsTitle.children[0]).toBe('Test Book');
    expect(bookDetailsAuthors.children[0]).toBe('Author 1, Author 2');
    expect(bookDetailsReview.children[0]).toBe('Testing');
  });

  it('should match snapshot', () => {
    expect(renderer.create(<ComponentWrapper />).toJSON()).toMatchSnapshot();
  });
});
