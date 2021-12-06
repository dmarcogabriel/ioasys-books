import React from 'react';
import {BookInfoContainer, BookInfoText} from './styles';

interface BookInfoProps {
  name: string;
  value: string | number;
}

export const BookInfo = ({name, value}: BookInfoProps): JSX.Element => (
  <BookInfoContainer>
    <BookInfoText isBold>{name}</BookInfoText>
    <BookInfoText isBold={false}>{value}</BookInfoText>
  </BookInfoContainer>
);
