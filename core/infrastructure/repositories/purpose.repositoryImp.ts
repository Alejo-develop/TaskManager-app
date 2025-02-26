import database from '../../../src/database/dbConfig';
import {Purpose} from '../../domain/entities/purposes/purpose';
import {CreatePurposeRequest} from '../../domain/entities/purposes/request/createPurposeRequest';
import {PurposeRepository} from '../../domain/interfaces/purpose.repository';

export class PurposeRepositoryImp implements PurposeRepository {
  async createPurpose(data: CreatePurposeRequest): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'INSERT INTO purposes (userId, categoryId, name, description) VALUES (?, ?, ?, ?)',
          [data.userId, data.categoryId, data.name, data.description],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to insert purpose'));
            }
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async findPurposes(
    userId: string,
    categoryId: string,
  ): Promise<Purpose[] | []> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM purposes WHERE userId = ? AND categoryId = ?',
          [userId, categoryId],
          (_tx, result) => {
            const purposes: Purpose[] = [];
            for (let i = 0; i < result.rows.length; i++) {
              const row = result.rows.item(i);
              purposes.push({
                id: row.id,
                userId: row.userId,
                categoryId: row.categoryId,
                name: row.name,
                description: row.description,
              });
            }
            resolve(purposes);
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async findPurposesByAnyCategory(userId: string): Promise<Purpose[] | []> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM purposes WHERE userId = ?',
          [userId],
          (_tx, result) => {
            const purposes: Purpose[] = [];
            for (let i = 0; i < result.rows.length; i++) {
              const row = result.rows.item(i);
              purposes.push({
                id: row.id,
                userId: row.userId,
                categoryId: row.categoryId,
                name: row.name,
                description: row.description,
              });
            }
            resolve(purposes);
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async updatePurpose(
    purposeId: number,
    data: Partial<CreatePurposeRequest>,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        const fields = Object.keys(data)
          .map(key => `${key} = ?`)
          .join(', ');
        const values = Object.values(data);

        tx.executeSql(
          `UPDATE purposes SET ${fields} WHERE id = ?`,
          [...values, purposeId],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to update purpose'));
            }
          },
          error => {
            reject(error);
          },
        );
      });
    });
  }

  async deletePurpose(purposeId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      database.transaction(tx => {
        tx.executeSql(
          'DELETE FROM purposes WHERE id = ?',
          [purposeId],
          (_tx, result) => {
            if (result.rowsAffected > 0) {
              resolve();
            } else {
              reject(new Error('Failed to delete purpose'));
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
