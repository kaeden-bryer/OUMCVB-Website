import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavElementComponent } from "./components/nav-element/nav-element.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    NavElementComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OUMCVB-website';

}
