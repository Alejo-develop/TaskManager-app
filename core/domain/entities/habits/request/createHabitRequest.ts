export interface CreateHabitRequest {
  userId: string;
  categoryId: string;
  name: string;
  description?: string;
  frequency: string;
  startDate: Date;
  endDate: Date;
}
