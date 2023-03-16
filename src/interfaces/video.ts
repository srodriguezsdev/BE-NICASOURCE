import { Optional } from 'sequelize'

export interface IVideo {
  creator_id: number;
  id: number;
  published: boolean;
  url: string;
}

export interface VideoAttributes {
  id: number;
  creator_id: string;
  url: string;
  published: boolean;
  title: string;
}

export type VideoCreationAttributes = Optional<VideoAttributes, 'id'>;

export interface IInteraction {
  id: number;
  follower_creator_id: string;
  followed_creator_id: string;
}

export interface InteractionAttributes {
  id: number;
  creator_id: string;
  video_id: string;
}

export type InteractionCreationAttributes = Optional<InteractionAttributes, 'id'>;
