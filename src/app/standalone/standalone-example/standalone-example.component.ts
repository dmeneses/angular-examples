import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {DogListComponent} from '../dog-list/dog-list.component';

@Component({
  selector: 'app-standalone-example',
  // Components, directives, and pipes can now be marked as standalone: true.
  // Do not need to be declared in an NgModule.
  standalone: true,
  // Standalone components specify their dependencies directly instead of getting them through NgModules.
  // Given that StandaloneExampleComponent is a standalone component, it can
  // - Import another standalone component: DogListComponent.
  // - Import an existing module directly: CommonModule
  imports: [CommonModule, DogListComponent],
  templateUrl: './standalone-example.component.html',
  styleUrl: './standalone-example.component.scss'
})
export class StandaloneExampleComponent {
}

