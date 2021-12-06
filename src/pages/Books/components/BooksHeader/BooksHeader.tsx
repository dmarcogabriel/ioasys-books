import React from 'react';
import {BooksHeaderContainer} from './styles';
import {HeaderTitle, HeaderLogoutButton} from '../../../../components';

export const BooksHeader = () => (
  <BooksHeaderContainer>
    <HeaderTitle noPadding noMargin color="dark" />
    <HeaderLogoutButton />
  </BooksHeaderContainer>
);
