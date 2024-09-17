import { Directive, HostListener, output } from '@angular/core';

@Directive({
  selector: '[onCapsLock]',
  standalone: true,
})
export class CapsLockDirective {
  onCapsLock = output<boolean>();

  @HostListener('window:keydown', ['$event'])
  checkCapsLock(event: KeyboardEvent) {
    this.onCapsLock.emit(
      event.getModifierState && event.getModifierState('CapsLock')
    );
  }
}
