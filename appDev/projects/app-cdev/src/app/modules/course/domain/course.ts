export type STATUS = 'published' | 'draft';

export type CoursePropsEssentials = {
  title: string;
};

export type CoursePropsOptionals = {
  courseId: string;
  slug: string;
  status: STATUS;
};

export type CourseProps = CoursePropsEssentials & Partial<CoursePropsOptionals>;

export class Course {
  private readonly courseId: string;
  private title: string;
  private readonly slug: string;
  private status: STATUS;

  constructor(props: CourseProps) {
    if (props.title.trim().length < 3)
      throw new Error('Title must be at least 3 characters long');

    this.courseId = props.courseId || '';
    this.title = props.title;
    this.slug = props.slug || '';
    this.status = props.status || 'draft';
  }

  get properties() {
    return {
      courseId: this.courseId,
      title: this.title,
      slug: this.slug,
      status: this.status,
    };
  }
}
