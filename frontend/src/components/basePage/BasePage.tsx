import React from 'react';
import SideMenu from '../shared/sideMenu/SideMenu';
import AppBar from '../shared/appBar/AppBar';
import { BasePageProps } from './interfaces';
import { Container, ContentContainer } from './styled';

const BasePage: React.FC<BasePageProps> = ({
    sideMenuOpened,
    onSideMenuOpen,
    onSideMenuClose,
    children
}) => {
  return (
    <Container>
      <AppBar sideMenuOpened={sideMenuOpened} onSideMenuOpen={onSideMenuOpen} />
      <SideMenu
          open={sideMenuOpened}
          onClose={onSideMenuClose}
          onOpen={onSideMenuOpen}
        />
      <ContentContainer>
        {children}
      </ContentContainer>
    </Container>
  );
};

export default BasePage;
