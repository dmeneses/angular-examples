import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {DogListComponent} from '../dog-list/dog-list.component';

@Component({
  selector: 'app-standalone-example',
  standalone: true,
  imports: [CommonModule, DogListComponent],
  templateUrl: './standalone-example.component.html',
  styleUrl: './standalone-example.component.scss'
})
export class StandaloneExampleComponent {

}
