import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})

@View({
    template: '<h1>My first Angular 2 App</h1>'
})

class AppComponent {
}

bootstrap(AppComponent);

//https://medium.com/@daviddentoom/how-to-build-an-angular-2-application-with-routing-and-services-67ead73db96e#.hugrrhpl6