import { Observable } from 'rxjs';

import {
  ResultScheduleResponse,
  ResultSchedulesByPageResponse,
} from '../../infrastructure/dtos/schedule.response';

export type ScheduleRepository = {
  getAll(): Observable<ResultScheduleResponse[]>;
  getByPage(
    page: number,
    pageSize: number
  ): Observable<ResultSchedulesByPageResponse>;
  create(data: { title: string }): Observable<Object>;
  update(data: {
    scheduleId: string;
    courseId: string;
    title: string;
    status: string;
  }): Observable<Object>;
  delete(data: { scheduleId: string }): Observable<Object>;
};
