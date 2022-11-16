export interface SquadMember {
  id: string;
  fullName: string;
  email: string;
  profilePic: string;
  password?: string;
  createdAt: string;
}

export interface Squad {
  name: string;
  users: [SquadMember];
}

export type Login = {
  email: string;
  password: string;
};
