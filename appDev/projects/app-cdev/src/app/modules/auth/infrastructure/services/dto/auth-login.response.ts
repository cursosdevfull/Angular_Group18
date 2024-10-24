export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type ResultTokensResponse = {
  accessToken: string;
  refreshToken: string;
};

export type ResultLoginResponse = {
  response: ResultTokensResponse;
};

export type AuthLoginResponse = {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: ResultLoginResponse;
};

export type ResultRegisterResponse = {
  response: ResultRegisterDataResponse;
};

export type ResultRegisterDataResponse = {
  tokens: ResultTokensResponse;
  secret: string;
  qrCode: string;
};

export type AuthRegisterResponse = {
  provider: string;
  status: string;
  statusCodeId: string;
  statusCode: number;
  result: ResultRegisterResponse;
};

export class AuthDto {
  static fromDataToTokens(data: AuthLoginResponse): Tokens {
    return {
      accessToken: data.result.response.accessToken,
      refreshToken: data.result.response.refreshToken,
    };
  }

  static fromDataToInfoRegister(
    data: AuthRegisterResponse
  ): ResultRegisterDataResponse {
    console.log('data', data);
    return {
      tokens: {
        accessToken: data.result.response.tokens.accessToken,
        refreshToken: data.result.response.tokens.refreshToken,
      },
      secret: data.result.response.secret,
      qrCode: data.result.response.qrCode,
    };
  }
}
