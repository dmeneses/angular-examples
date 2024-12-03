import { Component } from '@angular/core';
import {BehaviorSubject, map} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-rxjs-counter',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './rxjs-counter.component.html',
  styleUrl: './rxjs-counter.component.scss'
})
export class RxjsCounterComponent {
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();
  doubleCount$ = this.count$.pipe(map((value) => value * 2));

  increment() {
    const currentValue = this.countSubject.value;
    this.countSubject.next(currentValue + 1);
  }
}
