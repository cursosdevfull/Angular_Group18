import { Injectable } from '@angular/core';

import { Course } from '../domain/course';
import { CourseRepository } from '../domain/repositories/course.repository';

@Injectable({ providedIn: 'root' })
export class CourseInfrastructure implements CourseRepository {
  async getAll(): Promise<Course[]> {
    return [
      new Course({
        title: 'Course 1',
        courseId: '1',
        slug: 'course-1',
        status: 'published',
      }),
      new Course({
        title: 'Course 2',
        courseId: '2',
        slug: 'course-2',
        status: 'draft',
      }),
    ];
  }
}
