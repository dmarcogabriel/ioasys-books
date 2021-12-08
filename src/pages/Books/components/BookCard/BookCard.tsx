import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Card} from 'react-native-elements';
import {Book} from '../../../../types/book.interface';
import {
  BookCardContent,
  BookCardImage,
  BookTitle,
  BookAuthor,
  BookInfo,
  BookInfoText,
} from './styles';

export interface BookCardProps {
  book: Book;
  onPress: (book: any) => void;
  testID?: string;
}

export const BookCard = ({
  book,
  onPress,
  testID = 'bookContainerButton',
}: BookCardProps) => {
  const handlePressBook = () => onPress(book);

  return (
    <TouchableWithoutFeedback testID={testID} onPress={handlePressBook}>
      <Card>
        <BookCardContent>
          <BookCardImage
            testID="bookImage"
            source={{uri: book.imageUrl}}
            resizeMode="contain"
          />
          <View>
            <BookTitle testID="bookTitle">{book.title}</BookTitle>
            {book.authors.map((author, i) => (
              <BookAuthor key={`${i}`} testID={`bookAuthor${i + 1}`}>
                {author}
              </BookAuthor>
            ))}
            <BookInfo>
              <BookInfoText testID="bookPageCount">{`${book.pageCount} Páginas`}</BookInfoText>
              <BookInfoText testID="bookPublisher">
                {book.publisher}
              </BookInfoText>
              <BookInfoText testID="bookPublished">{`Publicado em ${book.published}`}</BookInfoText>
            </BookInfo>
          </View>
        </BookCardContent>
      </Card>
    </TouchableWithoutFeedback>
  );
};
