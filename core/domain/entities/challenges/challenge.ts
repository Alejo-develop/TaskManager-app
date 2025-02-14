export interface Challenge {
  id: number;
  userId: string;
  categoryId: string;
  name: string;
  description: string;
  frequency: string;
  startDate: Date;
  endDate: Date;
  streak: number;
}
