import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {
  @Input() player!: Player;

  constructor() { }

  flipCard(card: HTMLElement) {
    card.classList.toggle('click');
  }

  // Additional methods can be added here if needed
}
