import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

interface Layout {
  hideToolbar: boolean;
  hideMainMenu: boolean;
}

export type TLayout = Partial<Layout>;

export class LayoutService {
  private currentLayoutState: TLayout = {
    hideToolbar: true,
    hideMainMenu: true,
  };

  private layoutObs = new BehaviorSubject<TLayout>(this.currentLayoutState);

  layoutSignal = toSignal(this.layoutObs.asObservable());

  /*   getLayoutObs() {
    return this.layoutObs.asObservable();
  } */

  setLayoutObs(data: TLayout) {
    this.currentLayoutState = { ...this.currentLayoutState, ...data };
    this.layoutObs.next(this.currentLayoutState);
  }
}
