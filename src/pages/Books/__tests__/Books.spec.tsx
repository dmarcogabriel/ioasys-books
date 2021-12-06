import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Books} from '../Books';
import {ThemeProvider} from '../../../contexts';
// import {Book} from '../../../@types/book.interface';
import renderer from 'react-test-renderer';
import {Book} from '../../../@types/book.interface';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

const ComponentWrapper = () => (
  <ThemeProvider>
    <Books />
  </ThemeProvider>
);

const mockBooks: Book[] = [
  {
    authors: ['Yango Moreira Filho', 'Norberto Santos'],
    title: 'A dolorem itaque',
    description:
      'Commodi accusamus odio quia quia sequi laboriosam. Sequi fuga est consequatur maiores maiores blanditiis necessitatibus quia animi. Ut qui officiis. Atque aut a quia corrupti neque sint est quo consectetur.\n \rDoloremque sit in qui optio qui est. Temporibus reiciendis officiis totam ut nobis itaque odit. Maiores accusantium beatae omnis natus. Officia vitae provident animi totam incidunt magni nemo. Asperiores quod nihil quia itaque culpa natus cumque quidem.',
    pageCount: 1042,
    category: 'Literatura Estrangeira',
    imageUrl: 'https://files-books.ioasys.com.br/Book-9.jpg',
    language: 'Português',
    isbn10: '3318368196',
    isbn13: '426-3318368196',
    publisher: 'Pereira - Carvalho',
    published: 1998,
    id: '60171639faf5de22b804a054',
  },
  {
    authors: ['Ladislau Carvalho Neto', 'Rafaela Silva Jr.'],
    title: 'A voluptate a',
    description:
      'Voluptates tenetur sit quo. Dignissimos nulla nulla. Saepe veniam quas et ab eaque. Reiciendis minima ea sunt ut quae.\n \rError cum rem ducimus. Eum iste modi. Impedit ipsam eum optio. Esse velit in ut ullam natus quae nesciunt omnis a. Asperiores facere explicabo.',
    pageCount: 1342,
    category: 'Ficção Científica',
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    language: 'Inglês',
    isbn10: '5434807270',
    isbn13: '869-5434807270',
    publisher: 'Carvalho - Nogueira',
    published: 2006,
    id: '60171639faf5de22b804a074',
  },
  {
    authors: ['Sr. Marcela Reis', 'Natália Macedo', 'Ladislau Costa'],
    title: 'Ab',
    description:
      'Quasi eaque tempore. Rerum voluptas rem quibusdam expedita numquam ut similique. Dolorum voluptas quidem sapiente atque voluptas nihil est ipsa. Quia id explicabo esse.\n \rLaborum sit qui. Distinctio labore qui omnis odio dignissimos aut nobis. Officia expedita aspernatur totam esse. Sit voluptatem quis hic. Sapiente tempora libero. Velit et porro non mollitia.',
    pageCount: 924,
    category: 'Manuscritos',
    imageUrl: 'https://files-books.ioasys.com.br/Book-1.jpg',
    language: 'Português',
    isbn10: '6431554229',
    isbn13: '771-6431554229',
    publisher: 'Barros - Santos',
    published: 2013,
    id: '60171639faf5de22b804a14b',
  },
];

describe('pages/Books', () => {
  it('should pass on render book list', () => {
    const {getByTestId} = render(<ComponentWrapper />);

    const bookList = getByTestId('bookList');

    expect(bookList).toHaveProp('data', mockBooks);
  });

  // it('should match snapshot', () => {
  //   expect(
  //     renderer
  //       .create(<ComponentWrapper book={mockBook} onPress={mockOnPress} />)
  //       .toJSON(),
  //   ).toMatchSnapshot();
  // });
});
