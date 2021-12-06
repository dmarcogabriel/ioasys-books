import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {useUser} from '../../hooks';
import {LogoutButton} from './styles';

export const HeaderLogoutButton = () => {
  const {logout} = useUser();

  return (
    <LogoutButton onPress={logout}>
      <MIcon name="logout" size={24} />
    </LogoutButton>
  );
};
