export type ResultCourseResponse = {
  courseId: string;
  title: string;
  slug: string;
  status: string;
};

export type ResultGetAllCourseResponse = {
  response: ResultCourseResponse[];
};

export type GetAllCourseResponse = {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: ResultGetAllCourseResponse;
};

export type ResultCoursesByPageResponse = {
  data: ResultCourseResponse[];
  total: number;
  pageSize: number;
  currentPage: number;
  totalPage: number;
};
export type ResultGetCoursesByResponse = {
  response: ResultCoursesByPageResponse;
};

export type GetCoursesByPageResponse = {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: ResultGetCoursesByResponse;
};

export class CourseDto {
  static fromDataToResponse(
    data: GetAllCourseResponse
  ): ResultCourseResponse[] {
    return data.result.response;
  }

  static fromDataByPageToResponse(
    data: GetCoursesByPageResponse
  ): ResultCoursesByPageResponse {
    return data.result.response;
  }
}
