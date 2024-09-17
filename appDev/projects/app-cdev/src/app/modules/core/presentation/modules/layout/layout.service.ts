import { Inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

import { LAYOUT_TOKEN } from './layout.token';

interface Layout {
  hideToolbar: boolean;
  hideMainMenu: boolean;
}

export type TLayout = Partial<Layout>;

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  //private layoutObs = new BehaviorSubject<TLayout>(CONSTANT_LAYOUT_CONFIG);
  private layoutObs: BehaviorSubject<TLayout>;
  layoutSignal: Signal<TLayout>;

  constructor(@Inject(LAYOUT_TOKEN) layoutToken: TLayout) {
    this.layoutObs = new BehaviorSubject<TLayout>(layoutToken);
    this.layoutSignal = toSignal(
      this.layoutObs.asObservable()
    ) as Signal<TLayout>;
  }

  private getLastValue() {
    return this.layoutObs.getValue();
  }

  setLayoutObs(data: TLayout) {
    //this.currentLayoutState = { ...this.currentLayoutState, ...data };
    const value: TLayout = { ...this.getLastValue(), ...data };
    this.layoutObs.next(value);
  }
}
