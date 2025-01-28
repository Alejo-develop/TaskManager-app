export interface LoginResponse {
  message: string;
  data: {
    id: string;
    accessToken: string;
  };
}

export interface LoginErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
