import React from 'react';
import {HeaderTitleContainer, Logo, HeaderText} from './styles';
import {LogoImage, LogoDarkImage} from './assets';

export interface HeaderTitleProps {
  color: 'light' | 'dark';
  noMargin?: boolean;
  noPadding?: boolean;
  testID?: string;
}

export const HeaderTitle = ({
  color = 'dark',
  noMargin = false,
  noPadding = false,
  testID = 'headerTitle',
}: HeaderTitleProps): JSX.Element => {
  return (
    <HeaderTitleContainer noMargin={noMargin} noPadding={noPadding}>
      <Logo source={color === 'dark' ? LogoDarkImage : LogoImage} />
      <HeaderText testID={testID} color={color}>
        Books
      </HeaderText>
    </HeaderTitleContainer>
  );
};
