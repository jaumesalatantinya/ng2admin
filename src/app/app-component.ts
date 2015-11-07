import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Routes, APP_ROUTES} from './route-config';
import {HeaderComponent} from './header/header-component';

@Component({
	selector: 'app',
	templateUrl: 'app/app-component.html',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, HeaderComponent],
	providers: [ROUTER_PROVIDERS]
})
export class AppComponent {
	routes = Routes;
}
