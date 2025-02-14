import {Challenge} from '../../domain/entities/challenges/challenge';
import {CreateChallengeRequest} from '../../domain/entities/challenges/request/createCallengeRequest';
import {ChallengeRepository} from '../../domain/interfaces/challenge.repository';

export const CreateChallenge = (
  challengeRepository: ChallengeRepository,
  data: CreateChallengeRequest,
): Promise<void> => {
  return challengeRepository.createChallenge(data);
};

export const FindChallenge = (
  challengeRepository: ChallengeRepository,
  userId: string,
  categoryId: string,
): Promise<Challenge[] | []> => {
  return challengeRepository.findChallenge(userId, categoryId);
};

export const UpdateChallenge = (
  challengeRepository: ChallengeRepository,
  challengeId: number,
  data: Partial<CreateChallengeRequest>,
): Promise<void> => {
  return challengeRepository.updateChallenge(challengeId, data);
};

export const DeleteChallenge = (
  challengeRepository: ChallengeRepository,
  challengeId: number,
): Promise<void> => {
  return challengeRepository.deleteChallenge(challengeId);
};
