import {
  Login,
  MemberResult,
  SquadMember,
  NewSquad,
  Squads,
  Message,
  Post,
} from "../components/interfaces";
import client from "./client";

export const createMember = async (data: SquadMember) => {
  // check if data is undefined
  if (data !== undefined) {
    const getResults = await client.post("/api/auth/join", data);
    const results: MemberResult = getResults.data;
    if (getResults.status === 200) {
      return results;
    }
  }
  return { result: false, member: null };
};

export const createNewSquad = async (data: NewSquad) => {
  if (data !== undefined) {
    const getResults = await client.post('/api/squads', data);
    console.log(getResults);
    if (getResults.status === 200) {
      return getResults.data;
    }

  }
  return { squad: null }
}

export const loginMember = async (data: Login) => {
  if (data !== undefined) {
    const getResults = await client.post("/api/auth/login", data);
    const results: MemberResult = getResults.data;
    if (getResults.status === 200) {
      return results;
    }
  }
  return { result: false, member: null };
};

export const getMemberSquads = async (memberId: string) => {
  if (memberId) {
    const getData = await client.get(`/api/squads/${memberId}`);
    const getSquadsData = getData.data;
    if (getData.status === 200) {
      return getSquadsData;
    }
  }
};

export const getMembers = async () => {
  const getData = await client.get("/api/member/allMembers");

  const membersList: SquadMember[] = getData.data;
  return membersList;
};

export const sendMessage = async (message: Post) => {
  await client.post('/api/squads/post', message);
}
export const getChatData = async (squadId: string) => {
  const getResults = await client.get(`/api/squads/squadmessages/${squadId}`);
  const getData = getResults.data;
  return getData.results;
}