import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import { rootRoutes } from '../../routes';
import { RouteDescription } from '../../types/route';

const Navigation: FC = () => {
    return (
        <Router>
            <Switch>
                {
                    rootRoutes.map((routeDescription: RouteDescription) => (
                        <Route 
                            exact={routeDescription.exact} 
                            path={routeDescription.path} 
                            component={routeDescription.component} 
                        />
                    ))
                }
            </Switch>
        </Router>
    );
};

export default Navigation;