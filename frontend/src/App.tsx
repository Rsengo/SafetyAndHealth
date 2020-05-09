import React from 'react';
import { styled } from '@material-ui/core/styles';

import {
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText
} from '@material-ui/core'

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const Container = styled('div')({
  display: 'flex'
});

const App: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Container>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
      <button onClick={() => setOpen(!open)}>kek</button>
    </Container>
  );
};

export default App;
