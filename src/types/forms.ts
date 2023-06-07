/* ---------==== custom forms ====--------- */

export interface RaceFormData {
  id?: number;
  circuit: string;
  winner: string;
  cnstrc: string;
  watchable: string;
  rating: number;
  thoughts: string;
  creatorId?: number;
  createdAt?: string;
  updatedAt?: string;
}

/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  curPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
