import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ParametersService } from '../../core/presentation/services/parameters.service';
import { ScheduleRepository } from '../domain/repositories/schedule.repository';
import {
  GetAllScheduleResponse,
  GetSchedulesByPageResponse,
  ResultScheduleResponse,
  ResultSchedulesByPageResponse,
  ScheduleDto,
} from './dtos/schedule.response';

@Injectable({ providedIn: 'root' })
export class ScheduleInfrastructure implements ScheduleRepository {
  private readonly http = inject(HttpClient);
  parameters = inject(ParametersService);

  getAll(): Observable<ResultScheduleResponse[]> {
    return this.http
      .get<GetAllScheduleResponse>(`${this.parameters.apiUrl}/v1/schedule`)
      .pipe(map((response) => ScheduleDto.fromDataToResponse(response)));
  }

  getByPage(
    page: number,
    pageSize: number
  ): Observable<ResultSchedulesByPageResponse> {
    return this.http
      .get<GetSchedulesByPageResponse>(
        `${this.parameters.apiUrl}/v1/schedule/page/${page}/size/${pageSize}`
      )
      .pipe(map((response) => ScheduleDto.fromDataByPageToResponse(response)));
  }

  create(data: { title: string; courseId: string }): Observable<Object> {
    return this.http.post(`${this.parameters.apiUrl}/v1/schedule`, data);
  }

  update(data: {
    scheduleId: string;
    courseId: string;
    title: string;
    status: string;
  }): Observable<Object> {
    return this.http.put(
      `${this.parameters.apiUrl}/v1/schedule/${data.scheduleId}`,
      { title: data.title, status: data.status, courseId: data.courseId }
    );
  }

  delete(data: { scheduleId: string }): Observable<Object> {
    return this.http.delete(
      `${this.parameters.apiUrl}/v1/schedule/${data.scheduleId}`
    );
  }
}
