import { Inject, Injectable, signal } from '@angular/core';
import { bufferTime, fromEvent, merge, Observable, Subscription } from 'rxjs';

import { TInactivityConfig } from './inactivity.constant';
import { INACTIVITY_TOKEN } from './inactivity.token';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private readonly timeout: TInactivityConfig;
  private idleActivity: Observable<any>;
  private idleSubscription!: Subscription;
  //idleEvent: Subject<boolean> = new Subject<boolean>();
  idleEvent = signal<boolean>(false);

  constructor(@Inject(INACTIVITY_TOKEN) inactivityToken: TInactivityConfig) {
    this.timeout = inactivityToken;

    this.idleActivity = merge(
      fromEvent(window, 'click'),
      fromEvent(window, 'resize'),
      fromEvent(window, 'keydown')
    );
  }

  startInactivityTimer() {
    this.idleEvent.set(false);
    this.idleSubscription = this.idleActivity
      .pipe(bufferTime(this.timeout))
      .subscribe((activities: Array<any>) => {
        if (activities.length === 0) {
          this.lockScreen();
        }
      });
  }

  lockScreen() {
    this.idleEvent.set(true);
    this.stopInactivityTimer();
  }

  private stopInactivityTimer() {
    this.idleSubscription.unsubscribe();
  }
}
