export interface CreateChallengeRequest {
  userId: string;
  categoryId: string;
  name: string;
  description?: string;
  frequency: string;
  startDate: Date;
  endDate: Date;
}
