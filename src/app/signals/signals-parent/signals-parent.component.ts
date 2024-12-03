import {Component, signal} from '@angular/core';
import {SignalsChildComponent} from '../signals-child/signals-child.component';

@Component({
  selector: 'app-signals-parent',
  standalone: true,
  imports: [
    SignalsChildComponent
  ],
  templateUrl: './signals-parent.component.html',
  styleUrl: './signals-parent.component.scss'
})
export class SignalsParentComponent {
  message = signal('Hello from Parent');

  updateMessage() {
    this.message.set('Updated Message from Parent');
  }
}
