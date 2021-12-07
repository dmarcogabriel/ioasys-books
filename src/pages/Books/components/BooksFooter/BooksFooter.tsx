import React from 'react';
import {BooksFooterContainer} from './styles';
import {Button} from 'react-native-elements';

export interface BooksFooterProps {
  onLoadMore: () => void;
  disabled: boolean;
}

export const BooksFooter = ({
  onLoadMore,
  disabled,
}: BooksFooterProps): JSX.Element => (
  <BooksFooterContainer>
    <Button disabled={disabled} title="Carregar Mais" onPress={onLoadMore} />
  </BooksFooterContainer>
);
