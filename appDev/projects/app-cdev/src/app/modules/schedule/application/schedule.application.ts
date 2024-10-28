import { Inject, Injectable, signal } from '@angular/core';

import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import {
  ResultScheduleResponse,
  ResultSchedulesByPageResponse,
} from '../infrastructure/dtos/schedule.response';
import { ScheduleInfrastructure } from '../infrastructure/schedule.infrastructure';

@Injectable({ providedIn: 'root' })
export class ScheduleApplication {
  schedules = signal<ResultScheduleResponse[]>([]);
  scheduleByPage = signal<ResultSchedulesByPageResponse | undefined>(undefined);
  scheduleTransactionEnd = signal<number>(0);

  constructor(
    @Inject(ScheduleInfrastructure) private repository: ScheduleRepository
  ) {}

  getAllSchedules() {
    this.repository
      .getAll()
      .subscribe((response) => this.schedules.update(() => response));
  }

  getByPage(page: number, pageSize: number) {
    this.repository
      .getByPage(page, pageSize)
      .subscribe((response) => this.scheduleByPage.update(() => response));
  }

  create(data: { title: string; courseId: string }) {
    this.repository
      .create(data)
      .subscribe(() => this.scheduleTransactionEnd.set(new Date().getTime()));
  }

  update(data: {
    scheduleId: string;
    courseId: string;
    title: string;
    status: string;
  }) {
    this.repository
      .update(data)
      .subscribe(() => this.scheduleTransactionEnd.set(new Date().getTime()));
  }

  delete(data: { scheduleId: string }) {
    this.repository
      .delete(data)
      .subscribe(() => this.scheduleTransactionEnd.set(new Date().getTime()));
  }
}
