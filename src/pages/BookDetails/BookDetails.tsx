import React, {useCallback, useEffect, useState} from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {
  BookDetailsContainer,
  ContentSection,
  ContentSectionTitle,
  ContentSectionReview,
  BookDetailsImage,
  BookDetailsTitle,
  BookDetailsAuthors,
} from './styles';
import {Book} from '../../types/book.interface';
import {BookInfo} from './components';
import {StatusBar} from 'react-native';
import api from '../../services/api';
import {RootStacksParamsList} from '../../types/rootStacksParamsList.interface';
import {useUser, useErrorHandler} from '../../hooks';

export const BookDetails = () => {
  const {params} = useRoute<RouteProp<RootStacksParamsList, 'BookDetails'>>();
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const {logout} = useUser();
  const {handleError} = useErrorHandler();

  const loadBookDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const {data} = await api.get<Book>(`books/${params.id}`);
      setBook(data);
      setIsLoading(false);
    } catch (err: any) {
      if (err.response && err.response.status) {
        handleError(err.response.data, err.response.status, logout);
      } else {
        setIsLoading(false);
      }
    }
  }, [params.id, logout, handleError]);

  useEffect(() => {
    loadBookDetails();
  }, [loadBookDetails]);

  return (
    <BookDetailsContainer>
      <StatusBar backgroundColor="#ffffff" />
      {!isLoading && book && (
        <>
          <BookDetailsImage
            testID="bookDetailsImage"
            source={{uri: book.imageUrl}}
            resizeMode="cover"
          />
          <BookDetailsTitle testID="bookDetailsTitle">
            {book.title}
          </BookDetailsTitle>
          <BookDetailsAuthors testID="bookDetailsAuthors">
            {book.authors.join(', ')}
          </BookDetailsAuthors>
          <ContentSection>
            <ContentSectionTitle>INFORMAÇÕES</ContentSectionTitle>
            <BookInfo name="Páginas" value={`${book.pageCount} Páginas`} />
            <BookInfo name="Editora" value={book.publisher} />
            <BookInfo name="Publicação" value={book.published} />
            <BookInfo name="Idioma" value={book.language} />
            <BookInfo name="Título Original" value={book.title} />
            <BookInfo name="ISBN-10" value={book.isbn10} />
            <BookInfo name="ISBN-13" value={book.isbn13} />
            <BookInfo name="Categoria" value={book.category} />
          </ContentSection>
          <ContentSection marginBottom="42px">
            <ContentSectionTitle>RESENHA DA EDITORA</ContentSectionTitle>
            <ContentSectionReview testID="bookDetailsReview">
              {book.description}
            </ContentSectionReview>
          </ContentSection>
        </>
      )}
    </BookDetailsContainer>
  );
};
