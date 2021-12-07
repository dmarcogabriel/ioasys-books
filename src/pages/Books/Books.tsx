import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity, FlatList, StatusBar} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {FiltersModal} from '../../components';
import {SafeAreaView, BooksContainer, SearchSection} from './styles';
import {BookCard, SearchInput, BooksHeader, BooksFooter} from './components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Book} from '../../@types/book.interface';
import api from '../../services/api';
import {RootStacksParamsList} from '../../@types/rootStacksParamsList.interface';
import {useUser, useErrorHandler} from '../../hooks';

export interface ApiResponse {
  data: Book[];
  page: number;
  totalPages: number;
  totalItems: number;
}

type BooksScreenProp = NativeStackNavigationProp<
  RootStacksParamsList,
  'BookDetails'
>;

export const Books = (): JSX.Element => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number>(1);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const {navigate} = useNavigation<BooksScreenProp>();
  const {logout} = useUser();
  const {handleError} = useErrorHandler();

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

  const loadBooks = useCallback(
    async (pageNumber: number) => {
      if (!isLoading) {
        setIsLoading(true);
        try {
          const {data} = await api.get<ApiResponse>('books', {
            params: {page: pageNumber},
          });
          setBooks(oldBooks => [...oldBooks, ...data.data]);
          setPage(oldPage => oldPage + 1);
          setTotal(data.totalPages);
          setIsLoading(false);
        } catch (err: any) {
          if (err.response && err.response.status) {
            handleError(err.response.data, err.response.status, logout);
          } else {
            setIsLoading(false);
          }
        }
      }
    },
    [isLoading, logout, handleError],
  );

  const loadMoreBooks = async () => {
    if (books.length < total) {
      await loadBooks(page);
    }
  };

  useEffect(() => {
    loadBooks(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          testID="bookList"
          data={books}
          keyExtractor={item => item.id}
          renderItem={({item: book}) => (
            <BookCard
              testID={`bookCard${book.id}`}
              book={book}
              onPress={handleOpenBookDetails}
            />
          )}
          ListFooterComponent={
            <BooksFooter disabled={isLoading} onLoadMore={loadMoreBooks} />
          }
        />
        <FiltersModal isVisible={showFilters} onClose={handleCloseFilters} />
      </BooksContainer>
    </SafeAreaView>
  );
};
