import { Habit } from '../entities/habits/habit';
import {CreateHabitRequest} from '../entities/habits/request/createHabitRequest';

export interface HabitRepository {
  createHabit(data: CreateHabitRequest): Promise<void>;
  findHabits(userId: string, categoryId: string): Promise<Habit[] | []>
  updateHabit(habitId: number, data: Partial<CreateHabitRequest>): Promise<void>;
  deleteHabit(habitId: number): Promise<void>;
}
