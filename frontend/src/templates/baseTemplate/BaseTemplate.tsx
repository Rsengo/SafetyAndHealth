import React from 'react';
import SideMenu from '../../organisms/sideMenu/SideMenu';
import AppBar from '../../organisms/appBar/AppBar';
import { BaseTemplateProps } from './interfaces';
import { Container, ContentContainer } from './styled';

const BaseTemplate: React.FC<BaseTemplateProps> = ({
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

export default BaseTemplate;
