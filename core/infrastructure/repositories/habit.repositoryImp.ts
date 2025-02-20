import {Habit} from '../../domain/entities/habits/habit';
import {CreateHabitRequest} from '../../domain/entities/habits/request/createHabitRequest';
import {HabitRepository} from '../../domain/interfaces/habit.repository';
import database from '../../../src/database/dbConfig';

export class HabitRepositoryImp implements HabitRepository {
  async createHabit(data: CreateHabitRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        const formattedStartDate = new Date(data.startDate).toISOString();
        const formattedEndDate = new Date(data.endDate).toISOString();
        tx.executeSql(
          'INSERT INTO habits (userId, categoryId, name, description, frequency, startDate, endDate) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [
            data.userId,
            data.categoryId,
            data.name,
            data.description,
            data.frequency,
            formattedStartDate,
            formattedEndDate,
          ],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to insert habit'));
            }
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async findHabits(userId: string, categoryId: string): Promise<Habit[] | []> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM habits WHERE userId = ? AND categoryId = ?',
          [userId, categoryId],
          (_tx, result) => {
            const habits: Habit[] = [];
            for (let i = 0; i < result.rows.length; i++) {
              const row = result.rows.item(i);
              habits.push({
                id: row.id,
                userId: row.userId,
                categoryId: row.categoryId,
                name: row.name,
                description: row.description,
                frequency: row.frequency,
                startDate: row.startDate,
                endDate: row.endDate,
                streak: row.streak,
              });
            }
            resolve(habits);
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async updateHabit(
    habitId: number,
    data: Partial<CreateHabitRequest>,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        const fields = Object.keys(data)
          .map(key => `${key} = ?`)
          .join(', ');

        const values = Object.values(data).map(value => {
          if (value instanceof Date) {
            return value.toISOString();
          }
          return value;
        });
  
        tx.executeSql(
          `UPDATE habits SET ${fields} WHERE id = ?`,
          [...values, habitId],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to update habit'));
            }
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async deleteHabit(habitId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DELETE FROM habits WHERE id = ?',
          [habitId],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to delete habit'));
            }
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }
}
