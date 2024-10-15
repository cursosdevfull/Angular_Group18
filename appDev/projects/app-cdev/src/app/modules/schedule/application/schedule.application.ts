import { Inject, Injectable } from '@angular/core';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { ScheduleInfracture } from '../infrastructure/schedule.infrastructure';

@Injectable({ providedIn: 'root' })
export class ScheduleApplication {
  constructor(
    @Inject(ScheduleInfracture) private repository: ScheduleRepository
  ) {}

  async getAllSchedules() {
    return this.repository.getAll();
  }
}
