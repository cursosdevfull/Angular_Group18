export type STATUS = 'published' | 'draft';

export type SchedulePropsEssentials = {
  title: string;
};

export type SchedulePropsOptionals = {
  scheduleId: string;
  slug: string;
  status: STATUS;
};

export type ScheduleProps = SchedulePropsEssentials &
  Partial<SchedulePropsOptionals>;

export class Schedule {
  private readonly scheduleId: string;
  private title: string;
  private readonly slug: string;
  private status: STATUS;

  constructor(props: ScheduleProps) {
    if (props.title.trim().length < 3)
      throw new Error('Title must be at least 3 characters long');

    this.scheduleId = props.scheduleId || '';
    this.title = props.title;
    this.slug = props.slug || '';
    this.status = props.status || 'draft';
  }

  get properties() {
    return {
      scheduleId: this.scheduleId,
      title: this.title,
      slug: this.slug,
      status: this.status,
    };
  }
}
