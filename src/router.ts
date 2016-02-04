export class MyApp {
    constructor(@Inject(Router) router: Router) {
        router.config([
            { path: '', as: 'home', component: Home },
            { path: '/add', as: 'add', component: Add }
        ]);
    }
}