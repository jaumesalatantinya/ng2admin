import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
	selector: 'app',
	templateUrl: 'app/app-component.html',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
})
export class AppComponent {
}
