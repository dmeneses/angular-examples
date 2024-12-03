import {Route} from '@angular/router';
import {DogViewComponent} from './dog-view/dog-view.component';
import {StandaloneExampleComponent} from './standalone-example/standalone-example.component';

export default [
  {path: '', component: StandaloneExampleComponent},
  {path: 'details/:index', component: DogViewComponent},
] satisfies Route[];
