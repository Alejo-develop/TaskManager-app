import {Habit} from '../../domain/entities/habits/habit';
import {CreateHabitRequest} from '../../domain/entities/habits/request/createHabitRequest';
import {HabitRepository} from '../../domain/interfaces/habit.repository';

export const CreateHabit = (
  habitRepository: HabitRepository,
  data: CreateHabitRequest,
): Promise<void> => {
  return habitRepository.createHabit(data);
};

export const findHabits = (
  findHabitRepository: HabitRepository,
  userId: string,
  categoryId: string
): Promise<Habit[] | []> => {
  return findHabitRepository.findHabits(userId, categoryId);
};

export const updateHabit = (
  habitRepository: HabitRepository,
  habitId: number,
  data: Partial<CreateHabitRequest>,
): Promise<void> => {
  return habitRepository.updateHabit(habitId, data);
};

export const delteHabit = (
  habitRepository: HabitRepository,
  habitId: number,
): Promise<void> => {
    return habitRepository.deleteHabit(habitId)
};
