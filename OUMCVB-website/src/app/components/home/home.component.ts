import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
