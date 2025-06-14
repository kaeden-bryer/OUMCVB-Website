import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { Player } from '../../../models/player';


@Component({
  selector: 'app-roster',
  imports: [
    CommonModule,
    PlayerCardComponent,
    RouterLink,
  ],
  templateUrl: './roster.component.html',
  styleUrl: './roster.component.scss'
})
export class RosterComponent {

  players: Player[] = [];
  constructor() {
    this.players = this.loadPlayers();
    console.log('RosterComponent initialized with players:', this.players);
  }

  loadPlayers(): Player[] {
    return [
      new Player(
        'Kaeden',
        'Bryer',
        'OH',
        1,
        'Dearborn',
        'Michigan',
        '5\'11"',
        'Jr.',
        'Computer Science',
        'Kaeden.jpg',
        "Kaeden's bio"
      ),
      new Player(
        'Andrew',
        'Hatch',
        'MB',
        3,
        'Rochester',
        'Michigan',
        '6\'7"',
        'Jr.',
        'Anatomy',
        'Hatch.jpg',
        "Andrew's bio"
      ),
      new Player(
        "Andrew",
        "Aude",
        "S",
        2,
        "Rochester",
        "Michigan",
        '6\'3\"',
        'Jr.',
        'Biology',
        'Aude.jpg',
        "Aude's bio"
      ),
      new Player(
        "Winner",
        "Mulumi",
        "MB",
        8,
        "Rochester",
        "Michigan",
        '6\'1"',
        "Jr.",
        "Engineering",
        "Winner.jpg",
        "Winner's bio"
      )
    ];
  }
}
