import { Purpose } from '../../domain/entities/purposes/purpose';
import {CreatePurposeRequest} from '../../domain/entities/purposes/request/createPurposeRequest';
import {PurposeRepository} from '../../domain/interfaces/purpose.repository';

export const CreatePurpose = (
  purposeRepository: PurposeRepository,
  data: CreatePurposeRequest,
): Promise<void> => {
  return purposeRepository.createPurpose(data);
};

export const FindPurposes = (
  purposeRepository: PurposeRepository,
  userId: string,
  cateogryId: string
): Promise<Purpose[] | []> => {
  return purposeRepository.findPurposes(userId, cateogryId);
};

export const FindPurposesByAnyCategory = (
  purposeRepository: PurposeRepository,
  userId: string,
): Promise<Purpose[] | []> => {
  return purposeRepository.findPurposesByAnyCategory(userId);
};

export const updatePurpose = (
  purposeRepository: PurposeRepository,
  purposeId: number,
  data: Partial<CreatePurposeRequest>,
): Promise<void> => {
  return purposeRepository.updatePurpose(purposeId, data);
};

export const DeletePurpose = (
  purposeRepository: PurposeRepository,
  purposeId: number,
): Promise<void> => {
  return purposeRepository.deletePurpose(purposeId);
};
