import React from 'react';
import {BookInfoContainer, BookInfoText} from './styles';

export interface BookInfoProps {
  name: string;
  value: string | number;
}

export const BookInfo = ({name, value}: BookInfoProps): JSX.Element => (
  <BookInfoContainer>
    <BookInfoText testID="bookInfoName" isBold>
      {name}
    </BookInfoText>
    <BookInfoText testID="bookInfoValue" isBold={false}>
      {value}
    </BookInfoText>
  </BookInfoContainer>
);
