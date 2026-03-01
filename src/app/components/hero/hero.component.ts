import { Component } from '@angular/core';
import { CarouselSliderComponent } from "../carousel-slider/carousel-slider.component";
import { HeroHeaderComponent } from "../hero-header/hero-header.component";


@Component({
  selector: 'hero',
  imports: [CarouselSliderComponent, HeroHeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
