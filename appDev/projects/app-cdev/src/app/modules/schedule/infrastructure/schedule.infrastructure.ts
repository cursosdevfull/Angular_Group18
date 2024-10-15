import { Injectable } from '@angular/core';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import { Schedule } from '../domain/schedule';

@Injectable({ providedIn: 'root' })
export class ScheduleInfracture implements ScheduleRepository {
  async getAll(): Promise<Schedule[]> {
    return [
      new Schedule({
        title: 'Schedule 1',
        scheduleId: '1',
        slug: 'schedule-1',
        status: 'published',
      }),
      new Schedule({
        title: 'Schedule 2',
        scheduleId: '2',
        slug: 'schedule-2',
        status: 'draft',
      }),
    ];
  }
}
