export interface Habit {
  id: number;
  userId: string;
  categoryId: string;
  name: string;
  description: string;
  frequency: string;
  startDate: string;
  endDate: string;
  streak: number;
}
