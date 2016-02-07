import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'users-component',
    templateUrl: './app/users/users-component.html';
    directives: [CORE_DIRECTIVES]
})
export class UsersComponent {
	users = ['Anna', 'Eli', 'Ruth', 'Cris'];
}
