import { Course } from '../course';

export type CourseRepository = {
  getAll(): Promise<Course[]>;
};
