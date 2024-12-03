import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-rxjs-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './rxjs-filter.component.html',
  styleUrl: './rxjs-filter.component.scss'
})
export class RxjsFilterComponent {
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.filterData(value);
      });
  }

  filterData(query: string | null) {
    console.log('Filtering data with query:', query);
  }
}
