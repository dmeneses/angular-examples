import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './feature-list.component.html',
  styleUrl: './feature-list.component.scss'
})
export class FeatureListComponent {

}
