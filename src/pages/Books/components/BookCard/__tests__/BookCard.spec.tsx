import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {BookCard, BookCardProps} from '../BookCard';
import {ThemeProvider} from '../../../../../contexts';
import {Book} from '../../../../../@types/book.interface';
import renderer from 'react-test-renderer';

const ComponentWrapper = (props: BookCardProps) => (
  <ThemeProvider>
    <BookCard {...props} />
  </ThemeProvider>
);
const mockBook: Book = {
  title: 'Test Book',
  authors: ['Author 1', 'Author 2'],
  pageCount: 123,
  publisher: 'Tester',
  published: 1992,
  imageUrl: 'test',
  id: 'test',
  description: 'Testing',
  category: 'Test',
  isbn10: 'test-10',
  isbn13: 'test-13',
  language: 'test',
};
let mockOnPressResult: Book | null = null;
const mockOnPress = jest.fn((book: Book) => {
  mockOnPressResult = book;
});

describe('Books/components/BookCard', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(
      <ComponentWrapper book={mockBook} onPress={mockOnPress} />,
    );
    const bookImage = getByTestId('bookImage');
    const bookTitle = getByTestId('bookTitle');
    const bookAuthor1 = getByTestId('bookAuthor1');
    const bookAuthor2 = getByTestId('bookAuthor2');
    const bookPageCount = getByTestId('bookPageCount');
    const bookPublished = getByTestId('bookPublished');
    const bookPublisher = getByTestId('bookPublisher');

    expect(bookImage).toHaveProp('source', {uri: 'test'});
    expect(bookTitle.children[0]).toBe('Test Book');
    expect(bookAuthor1.children[0]).toBe('Author 1');
    expect(bookAuthor2.children[0]).toBe('Author 2');
    expect(bookPageCount.children[0]).toBe('123 Páginas');
    expect(bookPublished.children[0]).toBe('Publicado em 1992');
    expect(bookPublisher.children[0]).toBe('Tester');
  });

  it('should get Book ID by clicking', () => {
    const {getByTestId} = render(
      <ComponentWrapper book={mockBook} onPress={mockOnPress} />,
    );
    const bookContainerButton = getByTestId('bookContainerButton');

    fireEvent.press(bookContainerButton);

    expect(mockOnPress).toHaveBeenCalled();
    expect(mockOnPressResult).toBeTruthy();
    if (mockOnPressResult) {
      expect(mockOnPressResult.id).toBe('test');
      expect(mockOnPressResult.title).toBe('Test Book');
      expect(mockOnPressResult.authors[0]).toBe('Author 1');
      expect(mockOnPressResult.authors[1]).toBe('Author 2');
      expect(mockOnPressResult.pageCount).toBe(123);
      expect(mockOnPressResult.publisher).toBe('Tester');
      expect(mockOnPressResult.published).toBe(1992);
      expect(mockOnPressResult.imageUrl).toBe('test');
    }
  });

  it('should match snapshot', () => {
    expect(
      renderer
        .create(<ComponentWrapper book={mockBook} onPress={mockOnPress} />)
        .toJSON(),
    ).toMatchSnapshot();
  });
});
