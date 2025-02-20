import database from '../../../src/database/dbConfig';
import {Challenge} from '../../domain/entities/challenges/challenge';
import {CreateChallengeRequest} from '../../domain/entities/challenges/request/createCallengeRequest';
import {ChallengeRepository} from '../../domain/interfaces/challenge.repository';

export class ChallengeRepositoryImp implements ChallengeRepository {
  async createChallenge(data: CreateChallengeRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        const formattedStartDate = new Date(data.startDate).toISOString();
        const formattedEndDate = new Date(data.endDate).toISOString();
        tx.executeSql(
          'INSERT INTO challenges (userId, categoryId, name, description, frequency, startDate, endDate) VALUES (?, ?, ?, ?, ?, ?, ?)',
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
              reject(new Error('Failed to insert challenge'));
            }
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async findChallenge(
    userId: string,
    categoryId: string,
  ): Promise<Challenge[] | []> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM challenges WHERE userId = ? AND categoryId = ?',
          [userId, categoryId],
          (_tx, result) => {
            const challenges: Challenge[] = [];
            for (let i = 0; i < result.rows.length; i++) {
              const row = result.rows.item(i);
              challenges.push({
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
            resolve(challenges);
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async updateChallenge(
    challengeId: number,
    data: Partial<CreateChallengeRequest>,
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
          `UPDATE challenges SET ${fields} WHERE id = ?`,
          [...values, challengeId],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to update challenge'));
            }
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }
  

  async deleteChallenge(challengeId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DELETE FROM challenges WHERE id = ?',
          [challengeId],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to delete challenge'));
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
