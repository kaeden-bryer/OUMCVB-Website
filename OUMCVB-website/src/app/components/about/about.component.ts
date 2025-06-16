import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-about',
  imports: [
    GalleryComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
