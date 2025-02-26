import {Habit} from '../../domain/entities/habits/habit';
import {CreateHabitRequest} from '../../domain/entities/habits/request/createHabitRequest';
import {HabitRepository} from '../../domain/interfaces/habit.repository';

export const CreateHabit = (
  habitRepository: HabitRepository,
  data: CreateHabitRequest,
): Promise<void> => {
  return habitRepository.createHabit(data);
};

export const FindHabits = (
  habitRepository: HabitRepository,
  userId: string,
  categoryId: string
): Promise<Habit[] | []> => {
  return habitRepository.findHabits(userId, categoryId);
};

export const FindHabitsByAnyCategory = (
  habitRepository: HabitRepository,
  userId: string,
): Promise<Habit[] | []>  => {
  return habitRepository.findHabitsByAnyCategory(userId)
}

export const UpdateHabit = (
  habitRepository: HabitRepository,
  habitId: number,
  data: Partial<CreateHabitRequest>,
): Promise<void> => {
  return habitRepository.updateHabit(habitId, data);
};

export const DelteHabit = (
  habitRepository: HabitRepository,
  habitId: number,
): Promise<void> => {
    return habitRepository.deleteHabit(habitId)
};
