import {Challenge} from '../entities/challenges/challenge';
import {CreateChallengeRequest} from '../entities/challenges/request/createCallengeRequest';

export interface ChallengeRepository {
  createChallenge(data: CreateChallengeRequest): Promise<void>;
  findChallenge(userId: string, categoryId: string): Promise<Challenge[] | []>;
  findChallengesByAnyCategory(userId: string): Promise<Challenge[] | []>;
  updateChallenge(
    challegeId: number,
    data: Partial<CreateChallengeRequest>,
  ): Promise<void>;
  deleteChallenge(challengeId: number): Promise<void>;
}
