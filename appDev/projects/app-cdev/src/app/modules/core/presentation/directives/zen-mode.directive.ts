import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[zenMode]',
  standalone: true,
})
export class ZenModeDirective {
  //@Output() zenMode = new EventEmitter<boolean>();
  zenModeCurrent = false;
  zenMode = output<boolean>();

  @HostListener('window:keydown.control.p', ['$event'])
  onCtrlP(event: KeyboardEvent) {
    event.preventDefault();
    this.zenModeCurrent = !this.zenModeCurrent;
    this.zenMode.emit(this.zenModeCurrent);
  }
}
