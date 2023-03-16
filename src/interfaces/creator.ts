import { Optional } from 'sequelize'

export interface ICreator {
  id: number;
  name: string;
  email: string;
  photo: string;
  password: string;
}

export interface CreatorAttributes {
  id: number;
  name: string;
  email: string;
  photo: string;
  password: string;
}

export type CreatorCreationAttributes = Optional<CreatorAttributes, 'id'>;

export interface IFollow {
  id: number;
  follower_creator_id: string;
  followed_creator_id: string;
}

export interface FollowAttributes {
  id: number;
  follower_creator_id: string;
  followed_creator_id: string;
}

export type FollowCreationAttributes = Optional<FollowAttributes, 'id'>;
