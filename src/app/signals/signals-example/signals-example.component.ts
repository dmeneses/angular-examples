import {Component} from '@angular/core';
import {SignalsCounterComponent} from '../signals-counter/signals-counter.component';
import {RxjsCounterComponent} from '../rxjs-counter/rxjs-counter.component';
import {SignalsFilterComponent} from '../signals-filter/signals-filter.component';
import {RxjsFilterComponent} from '../rxjs-filter/rxjs-filter.component';
import {SignalsParentComponent} from '../signals-parent/signals-parent.component';

@Component({
  selector: 'app-signals-example',
  standalone: true,
  imports: [SignalsCounterComponent, RxjsCounterComponent, SignalsFilterComponent, RxjsFilterComponent, SignalsParentComponent],
  templateUrl: './signals-example.component.html',
  styleUrl: './signals-example.component.scss'
})
export class SignalsExampleComponent {

}
