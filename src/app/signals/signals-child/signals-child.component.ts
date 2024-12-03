import {Component, Input, Signal} from '@angular/core';

@Component({
  selector: 'app-signals-child',
  standalone: true,
  imports: [],
  templateUrl: './signals-child.component.html',
  styleUrl: './signals-child.component.scss'
})
export class SignalsChildComponent {
  @Input() message!: Signal<string>;

}
