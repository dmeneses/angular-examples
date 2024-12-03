import {Component, effect, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signals-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signals-filter.component.html',
  styleUrl: './signals-filter.component.scss'
})
export class SignalsFilterComponent {
  // Declares searchSignal as a reactive signal initialized with an empty string.
  searchSignal = signal('');
  private debounceTimeout: any;

  constructor() {
    // Sets up an effect that runs whenever searchSignal changes.
    effect(() => {
      const query = this.searchSignal();

      // Clears any existing timeout to prevent premature execution.
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.filterData(query);
      }, 300);
    });
  }

  filterData(query: string) {
    console.log('(Signals) Filtering data with query:', query);
  }
}
