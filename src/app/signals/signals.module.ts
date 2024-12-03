import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignalsExampleComponent} from './signals-example/signals-example.component';
import {Route} from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Standalone components can also be imported into existing NgModules-based contexts.
    // This allows existing applications (which are using NgModules today) to incrementally adopt the new, standalone style of component.
    // You can import a standalone component (or directive, or pipe) just like you would an NgModule
    SignalsExampleComponent
  ],
  exports: [
    SignalsExampleComponent
  ]
})
export class SignalsModule { }
