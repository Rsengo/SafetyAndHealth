import React from 'react';
import BaseTemplate from './templates/baseTemplate/BaseTemplate';
import Navigation from './modules/navigation/Navigation';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <BaseTemplate
      sideMenuOpened={open}
      onSideMenuOpen={() => setOpen(true)}
      onSideMenuClose={() => setOpen(false)}
    >
      <Navigation />
    </BaseTemplate>
  );
};

export default App;
