export type AuthState = {
  squadMember: SquadMember | null;
  isAuthenticated: boolean;
  loading: boolean;
};
export interface SquadMember {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
  password?: string;
  createdAt?: string;
}

export interface Squads {
  name: string;
  users: [SquadMember];
}

export type Login = {
  email: string;
  password: string;
};

export type MemberResult = {
  result: boolean;
  member?: SquadMember;
};

export interface AllMembers {
  members: SquadMember[];
}
