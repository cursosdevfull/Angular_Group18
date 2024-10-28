import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ParametersService } from '../../core/presentation/services/parameters.service';
import { CourseRepository } from '../domain/repositories/course.repository';
import {
  CourseDto,
  GetAllCourseResponse,
  GetCoursesByPageResponse,
  ResultCourseResponse,
  ResultCoursesByPageResponse,
} from './dtos/course.response';

@Injectable({ providedIn: 'root' })
export class CourseInfrastructure implements CourseRepository {
  private readonly http = inject(HttpClient);
  parameters = inject(ParametersService);

  getAll(): Observable<ResultCourseResponse[]> {
    return this.http
      .get<GetAllCourseResponse>(`${this.parameters.apiUrl}/v1/course`)
      .pipe(map((response) => CourseDto.fromDataToResponse(response)));
  }

  getByPage(
    page: number,
    pageSize: number
  ): Observable<ResultCoursesByPageResponse> {
    return this.http
      .get<GetCoursesByPageResponse>(
        `${this.parameters.apiUrl}/v1/course/page/${page}/size/${pageSize}`
      )
      .pipe(map((response) => CourseDto.fromDataByPageToResponse(response)));
  }

  create(data: { title: string }): Observable<Object> {
    return this.http.post(`${this.parameters.apiUrl}/v1/course`, data);
  }

  update(data: {
    courseId: string;
    title: string;
    status: string;
  }): Observable<Object> {
    return this.http.put(
      `${this.parameters.apiUrl}/v1/course/${data.courseId}`,
      { title: data.title, status: data.status }
    );
  }

  delete(data: { courseId: string }): Observable<Object> {
    return this.http.delete(
      `${this.parameters.apiUrl}/v1/course/${data.courseId}`
    );
  }
}
