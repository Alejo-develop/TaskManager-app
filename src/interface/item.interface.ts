interface BaseFormInterface {
  name: string;
  description: string;
  idCategorie: string;
}

export interface CreateHabitInterface extends BaseFormInterface {
  frecuency: number;
  startDate: Date;
  endDate: Date;
}

export interface CreateChallengeInterface extends BaseFormInterface {
  frecuency: number;
  startDate: Date;
  endDate: Date;
}

export interface CreatePurposeInterface extends BaseFormInterface {}

export type FormTypes = CreateHabitInterface | CreateChallengeInterface | CreatePurposeInterface;

