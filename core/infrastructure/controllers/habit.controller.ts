import {
  CreateHabit,
  findHabits,
  updateHabit,
  delteHabit,
} from '../../application/useCases/habit.useCase';
import {CreateHabitRequest} from '../../domain/entities/habits/request/createHabitRequest';
import {HabitRepositoryImp} from '../repositories/habit.repositoryImp';

const habitRepository = new HabitRepositoryImp();

export class HabitController {
  static async CreateHabit(data: CreateHabitRequest) {
    try {
      return await CreateHabit(habitRepository, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async FindHabits(userId: string, categoryId: string) {
    try {
      return await findHabits(habitRepository, userId, categoryId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async UpdateHbait(habitId: number, data: Partial<CreateHabitRequest>) {
    try {
      return await updateHabit(habitRepository, habitId, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async DeleteHabit(habitId: number) {
    try {
      return await delteHabit(habitRepository, habitId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
