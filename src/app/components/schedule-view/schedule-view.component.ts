import { Component } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-schedule-view',
  imports: [
    ScheduleComponent,
  ],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.scss'
})
export class ScheduleViewComponent {

}
