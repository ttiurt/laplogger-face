/* ---------===== custom props ====--------- */

export interface Race {
  id: number;
  circuit: string;
  winner: string;
  cnstrc: string;
  watchable: string;
  rating: number;
  thoughts: string;
  creatorId: number;
  createdAt: string;
  updatedAt: string;
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
