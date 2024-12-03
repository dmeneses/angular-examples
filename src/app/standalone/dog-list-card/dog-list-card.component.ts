import {Component, Input} from '@angular/core';
import {Dog} from '../dogs.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dog-list-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dog-list-card.component.html',
  styleUrl: './dog-list-card.component.scss'
})
export class DogListCardComponent {
  @Input() dog!: Dog;
  @Input() index!: Number;

}
