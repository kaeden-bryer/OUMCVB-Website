import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-element',
  imports: [
    RouterLink,
  ],
  templateUrl: './nav-element.component.html',
  styleUrl: './nav-element.component.scss'
})
export class NavElementComponent {
  toggleMobileMenu(menu: HTMLElement) {
    menu.classList.toggle('open');
  }
}
