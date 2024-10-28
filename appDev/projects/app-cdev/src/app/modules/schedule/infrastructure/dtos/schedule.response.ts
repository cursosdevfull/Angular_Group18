export type ResultScheduleResponse = {
  scheduleId: string;
  courseId: string;
  title: string;
  slug: string;
  status: string;
};

export type ResultGetAllScheduleResponse = {
  response: ResultScheduleResponse[];
};

export type GetAllScheduleResponse = {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: ResultGetAllScheduleResponse;
};

export type ResultSchedulesByPageResponse = {
  data: GetAllScheduleResponse[];
  total: number;
  pageSize: number;
  currentPage: number;
  totalPage: number;
};
export type ResultGetSchedulesByResponse = {
  response: ResultSchedulesByPageResponse;
};

export type GetSchedulesByPageResponse = {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: ResultGetSchedulesByResponse;
};

export class ScheduleDto {
  static fromDataToResponse(
    data: GetAllScheduleResponse
  ): ResultScheduleResponse[] {
    return data.result.response;
  }

  static fromDataByPageToResponse(
    data: GetSchedulesByPageResponse
  ): ResultSchedulesByPageResponse {
    return data.result.response;
  }
}
