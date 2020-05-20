import client from './client';

export type User = {
  id: number;
  username: string;
  email: string;
  points: number;
  admin: boolean;
  lastSolve: Date;
  submissions: object[];
};

export const getUserList = () => client.get<User[]>('/user/');

export const getSolves = () => client.get<number[]>('/user/solves');

export const removeUser = (userId: number) =>
  client.post('/user/remove', { userId });
