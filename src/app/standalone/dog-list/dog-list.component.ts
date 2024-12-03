import { Component } from '@angular/core';
import {DogsService} from '../dogs.service';
import {DogListCardComponent} from '../dog-list-card/dog-list-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule, DogListCardComponent],
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.scss'
})
export class DogListComponent {
  constructor(readonly dogsService: DogsService) { }
}
