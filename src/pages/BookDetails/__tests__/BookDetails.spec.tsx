import React from 'react';
import {render} from '@testing-library/react-native';
import {BookDetails} from '../BookDetails';
import {ThemeProvider} from '../../../contexts';
// import {Book} from '../../../@types/book.interface';
import renderer from 'react-test-renderer';

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
// const mockBook: Book = {
//   title: 'Test Book',
//   authors: ['Author 1', 'Author 2'],
//   pageCount: 123,
//   publisher: 'Tester',
//   published: 1992,
//   imageUrl: 'test',
//   id: 'test',
//   description: 'Testing',
//   category: 'Test',
//   isbn10: 'test-10',
//   isbn13: 'test-13',
//   language: 'test',
// };

describe('pages/BookDetails', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<ComponentWrapper />);

    const bookDetailsImage = getByTestId('bookDetailsImage');
    const bookDetailsTitle = getByTestId('bookDetailsTitle');
    const bookDetailsAuthors = getByTestId('bookDetailsAuthors');
    const bookDetailsReview = getByTestId('bookDetailsReview');

    expect(bookDetailsImage).toHaveProp('source', {
      uri: 'https://files-books.ioasys.com.br/Book-0.jpg',
    });
    expect(bookDetailsTitle.children[0]).toBe('A Culpa é das Estrelas');
    expect(bookDetailsAuthors.children[0]).toBe('Jonh Green');
    expect(bookDetailsReview.children[0]).toBe(
      'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
    );
  });

  it('should match snapshot', () => {
    expect(renderer.create(<ComponentWrapper />).toJSON()).toMatchSnapshot();
  });
});
