import React from 'react';
import {HeaderTitleContainer, Logo, HeaderText} from './styles';
import {LogoImage, LogoDarkImage} from './assets';

interface HeaderTitleProps {
  color: 'light' | 'dark';
  noMargin?: boolean;
  noPadding?: boolean;
}

export const HeaderTitle = ({
  color = 'dark',
  noMargin = false,
  noPadding = false,
}: HeaderTitleProps): JSX.Element => {
  return (
    <HeaderTitleContainer noMargin={noMargin} noPadding={noPadding}>
      <Logo source={color === 'dark' ? LogoDarkImage : LogoImage} />
      <HeaderText color={color}>Books</HeaderText>
    </HeaderTitleContainer>
  );
};
