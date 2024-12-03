import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signals-counter',
  standalone: true,
  imports: [],
  templateUrl: './signals-counter.component.html',
  styleUrl: './signals-counter.component.scss'
})
export class SignalsCounterComponent {
  // creates a reactive signal with an initial value.
  count = signal(0);
  // creates a computed signal that updates when dependencies change.
  doubleCount = computed(() => this.count() * 2);

  increment() {
    // Updating a signal with update(), automatically updates any computed signals or templates that depend on it.
    this.count.update((value) => value + 1);
  }
}
