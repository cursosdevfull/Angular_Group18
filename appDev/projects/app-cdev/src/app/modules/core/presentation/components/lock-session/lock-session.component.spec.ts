import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockSessionComponent } from './lock-session.component';

describe('LockSessionComponent', () => {
  let component: LockSessionComponent;
  let fixture: ComponentFixture<LockSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
