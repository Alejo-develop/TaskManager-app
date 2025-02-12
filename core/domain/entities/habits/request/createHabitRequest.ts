export interface CreateHabitRequest {
  userId: string;
  categoryId: string;
  name: string;
  description?: string;
  frequency: string;
  startDate: string;
  endDate: string;
}
