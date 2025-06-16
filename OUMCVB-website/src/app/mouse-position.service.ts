// mouse-position.service.ts
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MousePositionService {
  private mousePositionSubject = new BehaviorSubject<{ x: number, y: number }>({ x: 0, y: 0 });
  mousePosition$ = this.mousePositionSubject.asObservable();

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent<MouseEvent>(window, 'mousemove')
        .pipe(throttleTime(16)) // ~60fps
        .subscribe(event => {
          this.ngZone.run(() => {
            this.mousePositionSubject.next({ x: event.clientX, y: event.clientY });
          });
        });
    });
  }
}
