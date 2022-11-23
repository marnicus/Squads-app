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
  _id: string;
  name: string;
  members: SquadMember[];
}

export interface NewSquad {
  name: string;
  members: string[];
}

export type Login = {
  email: string;
  password: string;
};

export type MemberResult = {
  result: boolean;
  member?: SquadMember;
};

export type SquadChat = {
  _id: string,
  squadId: string;
  messages: Message[]
}

export type Post = {
  _id?: string;
  squadId: string;
  type: string;
  member: SquadMember;
  text?: string;
  emoji?: string;
  imageURL?: string;
  createdAt?: string;
}

export type Message = {
  _id?: string;
  type: string;
  member: SquadMember;
  text?: string;
  emoji?: string;
  imageURL?: string;
  createdAt?: string;
};
