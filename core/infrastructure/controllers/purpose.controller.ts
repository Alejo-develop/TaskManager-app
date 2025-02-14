import {
  CreatePurpose,
  DeletePurpose,
  FindPurposes,
  updatePurpose,
} from '../../application/useCases/purpose.useCase';
import {CreatePurposeRequest} from '../../domain/entities/purposes/request/createPurposeRequest';
import {PurposeRepositoryImp} from '../repositories/purpose.repositoryImp';

const purposeRepository = new PurposeRepositoryImp();

export class PurposeController {
  static async CreatePurpose(data: CreatePurposeRequest) {
    try {
      return await CreatePurpose(purposeRepository, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async FIndPurposes(userId: string, categoryId: string) {
    try {
      return await FindPurposes(purposeRepository, userId, categoryId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async UpdatePurposes(
    purposeId: number,
    data: Partial<CreatePurposeRequest>,
  ) {
    try {
      return await updatePurpose(purposeRepository, purposeId, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async DeletePurpose(purposeId: number) {
    try {
      return await DeletePurpose(purposeRepository, purposeId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
