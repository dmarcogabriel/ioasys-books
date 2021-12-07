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
import {isEmpty, omitBy} from 'lodash';
import {CATEGORIES} from './filtersParams';

export interface ApiResponse {
  data: Book[];
  page: number;
  totalPages: number;
  totalItems: number;
}

interface ApiFiltersParams {
  title?: string;
  category?: string;
  year?: string;
  author?: string;
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
  const [filters, setFilters] = useState<ApiFiltersParams>({});

  const handleShowFilters = () => {
    setShowFilters(true);
  };

  const handleCloseFilters = async (filtersParams: ApiFiltersParams | null) => {
    if (!isEmpty(filtersParams)) {
      setFilters(oldfilters => ({...oldfilters, ...filtersParams}));
    }
    setShowFilters(false);
  };

  const handleSearch = async (term: string) => {
    setFilters(oldFilters => ({...oldFilters, title: term}));
  };

  const handleOpenBookDetails = (book: Book) => {
    navigate('BookDetails', {id: book.id});
  };

  const loadBooks = useCallback(
    async (pageNumber: number, filtersParams?: ApiFiltersParams) => {
      if (!isLoading) {
        setIsLoading(true);
        try {
          console.log(
            'FILTERS',
            omitBy(filtersParams, filterParam => !filterParam),
          );
          const {data, config} = await api.get<ApiResponse>('books', {
            params: {
              page: pageNumber,
              ...omitBy(filtersParams, filterParam => !filterParam),
            },
          });
          console.log('PARAMS', config.params);
          if (isEmpty(filtersParams)) {
            setBooks(oldBooks => [...oldBooks, ...data.data]);
          } else {
            setBooks([...data.data]);
          }
          setPage(pageNumber + 1);
          setTotal(data.totalItems);
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
    let mounted = true;
    if (mounted) {
      loadBooks(page);
    }
    return () => {
      mounted = false;
    };
  }, [loadBooks, page]);

  useEffect(() => {
    if (!isEmpty(filters)) {
      loadBooks(1, filters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#e5e5e5" />
      <BooksHeader />
      <BooksContainer>
        <SearchSection>
          <SearchInput onSearch={handleSearch} />
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
            <BooksFooter
              disabled={isLoading || books.length >= total}
              onLoadMore={loadMoreBooks}
            />
          }
        />
        <FiltersModal
          yearOptions={['1998']}
          authorOptions={['some author']}
          categoryOptions={CATEGORIES}
          isVisible={showFilters}
          onClose={handleCloseFilters}
        />
      </BooksContainer>
    </SafeAreaView>
  );
};
