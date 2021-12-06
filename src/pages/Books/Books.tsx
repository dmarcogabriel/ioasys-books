import React, {useState} from 'react';
import {TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {FiltersModal} from '../../components';
import {SafeAreaView, BooksContainer, SearchSection} from './styles';
import {BookCard, SearchInput, BooksHeader} from './components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Book} from '../../@types/book.interface';

interface ApiResponse {
  data: Book[];
  page: number;
  totalPages: number;
  totalItems: number;
}

const MOCK_RESPONSE: ApiResponse = {
  data: [
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
  ],
  page: 1,
  totalPages: 34,
  totalItems: 674,
};

type BooksScreenProp = NativeStackNavigationProp<
  {Books: undefined; BookDetails: {id: string}},
  'BookDetails'
>;

export const Books = (): JSX.Element => {
  const [books] = useState<Book[]>(MOCK_RESPONSE.data);
  const [] = useState({
    page: MOCK_RESPONSE.page,
    total: MOCK_RESPONSE.totalPages,
  });
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const {navigate} = useNavigation<BooksScreenProp>();

  const handleShowFilters = () => {
    setShowFilters(true);
  };

  const handleCloseFilters = (data: any | null) => {
    if (data) {
      console.log(data);
    }
    setShowFilters(false);
  };

  const handleOpenBookDetails = (book: Book) => {
    navigate('BookDetails', {id: book.id});
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#e5e5e5" />
      <BooksHeader />
      <BooksContainer>
        <SearchSection>
          <SearchInput onSearch={term => console.log(term)} />
          <TouchableOpacity onPress={handleShowFilters}>
            <MIcon name="tune" size={24} />
          </TouchableOpacity>
        </SearchSection>
        <FlatList
          data={books}
          keyExtractor={item => item.id}
          renderItem={({item: book}) => (
            <BookCard book={book} onPress={handleOpenBookDetails} />
          )}
        />
        <FiltersModal isVisible={showFilters} onClose={handleCloseFilters} />
      </BooksContainer>
    </SafeAreaView>
  );
};
