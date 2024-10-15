import { Inject, Injectable } from '@angular/core';

import { Course } from '../domain/course';
import { CourseRepository } from '../domain/repositories/course.repository';
import { CourseInfrastructure } from '../infrastructure/course.infrastructure';

@Injectable({
  providedIn: 'root',
})
export class CourseApplication {
  constructor(
    @Inject(CourseInfrastructure) private repository: CourseRepository
  ) {}

  async getAllCourses(): Promise<Course[]> {
    return this.repository.getAll();
  }
}
