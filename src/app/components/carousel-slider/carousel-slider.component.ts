import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselCaptionComponent
} from '@coreui/angular';

@Component({
  selector: 'app-carousel-slider',
  imports: [
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    CarouselCaptionComponent,
    RouterLink,
  ],
  templateUrl: './carousel-slider.component.html',
  styleUrl: './carousel-slider.component.scss'
})

export class CarouselSliderComponent implements OnInit {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'oumcvb-fundraiser.jpg',
      title: 'Oakland Grass Power 4\'s Fundraiser!',
      subtitle: 'Come join us at our annual grass power 4\s fundraiser tournament! Sign up on facebook with your friends!'
    };
    this.slides[1] = {
      id: 1,
      src: 'react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };
    this.slides[2] = {
      id: 2,
      src: 'vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    };
  }

}
