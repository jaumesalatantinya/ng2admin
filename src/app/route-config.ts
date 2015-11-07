import {RouteDefinition} from 'angular2/router';
import {ItemsComponent} from './items/items-component';
import {UsersComponent} from './users/users-component';

export const Routes = {
    items: {
      path: '/',
      as: 'Items',
      component: ItemsComponent,
      link: ['/Items']
    },
    users: {
        path: '/users',
        as: 'Users',
        component: UsersComponent,
        link: ['/Users']
    }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes).map((name) => Routes[name]);
