import { Schedule } from '../schedule';

export type ScheduleRepository = {
  getAll(): Promise<Schedule[]>;
};
