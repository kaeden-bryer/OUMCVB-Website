import { Component } from '@angular/core';
import { CarouselSliderComponent } from "../carousel-slider/carousel-slider.component";


@Component({
  selector: 'hero',
  imports: [CarouselSliderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
