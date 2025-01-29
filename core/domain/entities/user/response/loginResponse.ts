export interface LoginResponse {
  message: string;
  data: {
    accessToken: string;
  };
}

export interface LoginErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
