import {
  CreateChallenge,
  DeleteChallenge,
  FindChallenge,
  UpdateChallenge,
} from '../../application/useCases/challenge.useCase';
import {CreateChallengeRequest} from '../../domain/entities/challenges/request/createCallengeRequest';
import {ChallengeRepositoryImp} from '../repositories/challenge.repositoryImp';

const challengeRepository = new ChallengeRepositoryImp();

export class ChallengeController {
  static async CreateChallenge(data: CreateChallengeRequest) {
    try {
      return await CreateChallenge(challengeRepository, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async FindChallenges(userId: string, categoryId: string) {
    try {
      return await FindChallenge(challengeRepository, userId, categoryId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async UpdateChallenge(
    challengeId: number,
    data: Partial<CreateChallengeRequest>,
  ) {
    try {
      return await UpdateChallenge(challengeRepository, challengeId, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async DeleteChallenge(challengeId: number) {
    try {
      return await DeleteChallenge(challengeRepository, challengeId);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
