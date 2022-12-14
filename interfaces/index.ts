// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
};
export interface Login {
  email: string,
  password : string
}

export interface Getuser {
  id: number,
  username: string,
  email: string,
  password: string,
  role_id: number,
  group_id: string
}