import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Card} from 'react-native-elements';
import {Book} from '../../../../@types/book.interface';
import {
  BookCardContent,
  BookCardImage,
  BookTitle,
  BookAuthor,
  BookInfo,
  BookInfoText,
} from './styles';

interface BookCardProps {
  book: Book;
  onPress: (book: any) => void;
}

export const BookCard = ({book, onPress}: BookCardProps) => {
  const handlePressBook = () => onPress(book);

  return (
    <TouchableWithoutFeedback onPress={handlePressBook}>
      <Card>
        <BookCardContent>
          <BookCardImage source={{uri: book.imageUrl}} resizeMode="contain" />
          <View>
            <BookTitle>{book.title}</BookTitle>
            {book.authors.map((author, i) => (
              <BookAuthor key={`${i}`}>{author}</BookAuthor>
            ))}
            <BookInfo>
              <BookInfoText>{`${book.pageCount} Páginas`}</BookInfoText>
              <BookInfoText>{book.publisher}</BookInfoText>
              <BookInfoText>{`Publicado em ${book.published}`}</BookInfoText>
            </BookInfo>
          </View>
        </BookCardContent>
      </Card>
    </TouchableWithoutFeedback>
  );
};
