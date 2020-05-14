import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import UsersAdministration from '../usersAdministration/UsersAdministration';
import UserDocuments from '../userDocuments/UserDocuments';

const Navigation: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/users'>
                    <UsersAdministration />
                </Route>
                <Route path='/userDocuments'>
                    <UserDocuments />
                </Route>
                <Route exect path='/'>
                    <div>start page</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default Navigation;