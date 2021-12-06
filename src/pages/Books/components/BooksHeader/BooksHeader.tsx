import React from 'react';
import {BooksHeaderContainer, LogoutButton} from './styles';
import {HeaderTitle} from '../../../../components';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useUser} from '../../../../hooks';

export const BooksHeader = () => {
  const {logout} = useUser();

  return (
    <BooksHeaderContainer>
      <HeaderTitle noPadding noMargin color="dark" />
      <LogoutButton testID="logoutButton" onPress={logout}>
        <MIcon name="logout" size={24} />
      </LogoutButton>
    </BooksHeaderContainer>
  );
};
