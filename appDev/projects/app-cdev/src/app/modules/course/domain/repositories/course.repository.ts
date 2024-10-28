import { Observable } from 'rxjs';

import {
  ResultCourseResponse,
  ResultCoursesByPageResponse,
} from '../../infrastructure/dtos/course.response';

export type CourseRepository = {
  getAll(): Observable<ResultCourseResponse[]>;
  getByPage(
    page: number,
    pageSize: number
  ): Observable<ResultCoursesByPageResponse>;
  create(data: { title: string }): Observable<Object>;
  update(data: {
    courseId: string;
    title: string;
    status: string;
  }): Observable<Object>;
  delete(data: { courseId: string }): Observable<Object>;
};
