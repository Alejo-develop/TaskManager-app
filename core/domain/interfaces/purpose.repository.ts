import { Purpose } from "../entities/purposes/purpose";
import { CreatePurposeRequest } from "../entities/purposes/request/createPurposeRequest";

export interface PurposeRepository {
  createPurpose(data: CreatePurposeRequest): Promise<void>;
  findPurposes(userId: string, categoryId: string): Promise<Purpose[] | []>;
  updatePurpose(purposeId: number, data: Partial<CreatePurposeRequest>): Promise<void>;
  deletePurpose(purposeId: number): Promise<void>;
}
