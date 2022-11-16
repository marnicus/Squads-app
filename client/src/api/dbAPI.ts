import { Login, SquadMember } from "../components/interfaces";
import client from "./client";

export const createMember = async (data: SquadMember) => {
  return await client.post("/api/member", data);
};

export const loginMember = async (data: Login) => {
  return await client.post('')
}
