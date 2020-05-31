import { RouteComponentProps } from 'react-router-dom';

export type RouteDescription = {
    path: string;

    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;

    exact?: boolean;
}