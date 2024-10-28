import { Inject, Injectable, signal } from '@angular/core';

import { CourseRepository } from '../domain/repositories/course.repository';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';
import {
  ResultCourseResponse,
  ResultCoursesByPageResponse,
} from '../infrastructure/dtos/course.response';

@Injectable({
  providedIn: 'root',
})
export class CourseApplication {
  courses = signal<ResultCourseResponse[]>([]);
  courseByPage = signal<ResultCoursesByPageResponse | undefined>(undefined);
  courseTransactionEnd = signal<boolean>(false);

  constructor(
    @Inject(CourseInfrastructure) private repository: CourseRepository
  ) {}

  getAllCourses() {
    this.repository
      .getAll()
      .subscribe((response) => this.courses.update(() => response));
  }

  getByPage(page: number, pageSize: number) {
    this.repository
      .getByPage(page, pageSize)
      .subscribe((response) => this.courseByPage.update(() => response));
  }

  create(data: { title: string }) {
    this.repository
      .create(data)
      .subscribe(() => this.courseTransactionEnd.set(true));
  }

  update(data: { courseId: string; title: string; status: string }) {
    this.repository
      .update(data)
      .subscribe(() => this.courseTransactionEnd.set(true));
  }

  delete(data: { courseId: string }) {
    this.repository
      .delete(data)
      .subscribe(() => this.courseTransactionEnd.set(true));
  }
}
