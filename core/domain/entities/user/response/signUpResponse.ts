export interface SignUpResponse {
    message: string;
  }

  export interface SignUpErrorResponse {
    message: string;
    error: string;
    statusCode: number;
  }