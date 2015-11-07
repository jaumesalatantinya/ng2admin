import {Component, provide} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Routes, APP_ROUTES} from './route-config';
import {HeaderComponent} from './header/header-component';
import {FooterComponent} from './footer/footer-component';
// import {UsersComponent} from './users/users-component';


@Component({
	selector: 'app',
	templateUrl: 'app/app-component.html',
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent],
	providers: [
		ROUTER_PROVIDERS,
		provide(LocationStrategy, { useClass: HashLocationStrategy })
	]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
	routes = Routes;
}
