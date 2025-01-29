export interface PayloadInterface {
  id: string;
  name: string;
  email: string;
}

export interface SessionInfoInterface{
  id: string;
  name: string; 
  email: string;
  token: string;
  isAuthenticated: boolean
}
