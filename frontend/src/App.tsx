import React from 'react';
import BasePage from './components/templates/basePage/BasePage';
import Navigation from './modules/navigation/Navigation';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <BasePage
      sideMenuOpened={open}
      onSideMenuOpen={() => setOpen(true)}
      onSideMenuClose={() => setOpen(false)}
    >
      <Navigation />
    </BasePage>
  );
};

export default App;
