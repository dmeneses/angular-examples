import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-examples';

  constructor() {
    setTheme('bs5'); // or 'bs4'
  }
}
