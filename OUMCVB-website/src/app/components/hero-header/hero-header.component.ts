import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MousePositionService } from '../../mouse-position.service';

@Component({
  selector: 'app-hero-header',
  imports: [
    CommonModule
  ],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss'
})
export class HeroHeaderComponent {

  x: number = 0;
  y: number = 0;
  isHovered = false;

  constructor(private mousePositionService: MousePositionService) {}

  ngOnInit() {
    this.mousePositionService.mousePosition$.subscribe(position => {
      this.x = position.x;
      this.y = position.y;
    });
  }

  get maskStyle() {
    const size = this.isHovered ? 400 : 40;
    const posX = this.x - size / 2;
    const posY = this.y -  size / 2;
    return {
      WebkitMaskPosition: `${posX}px ${posY}px`,
      WebkitMaskSize: `${size}px`,
      //transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)' // backOut equivalent
    };
  }


}
