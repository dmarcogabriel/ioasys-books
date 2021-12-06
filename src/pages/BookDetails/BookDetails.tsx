import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  BookDetailsContainer,
  ContentSection,
  ContentSectionTitle,
  ContentSectionReview,
  BookDetailsImage,
  BookDetailsTitle,
  BookDetailsAuthors,
} from './styles';
import {Book} from '../../@types/book.interface';
import {BookInfo} from './components';
import {StatusBar} from 'react-native';

const MOCK_BOOK_DETAILS = {
  id: '8f41b92c7460b9337660427e',
  title: 'A Culpa é das Estrelas',
  description:
    'Hazel foi diagnosticada com câncer aos treze anos e agora, aos dezesseis, sobrevive graças a uma droga revolucionária que detém a metástase em seus pulmões. Ela sabe que sua doença é terminal e passa os dias vendo tevê e lendo Uma aflição imperial, livro cujo autor deixou muitas perguntas sem resposta. ',
  authors: ['Jonh Green'],
  pageCount: 288,
  category: 'Romance',
  imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
  isbn10: '0062856626',
  isbn13: '978-0062856623',
  language: 'Inglês',
  publisher: 'Intrínseca',
  published: 2002,
};

export const BookDetails = () => {
  const {params} = useRoute();
  const [book] = useState<Book>(MOCK_BOOK_DETAILS);

  console.log(params);

  return (
    <BookDetailsContainer>
      <StatusBar backgroundColor="#ffffff" />
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
    </BookDetailsContainer>
  );
};
