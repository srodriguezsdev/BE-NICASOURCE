import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript'
import { CreatorAttributes, CreatorCreationAttributes } from '../interfaces/creator'
import { Video } from './video.model'
import { Follow } from './follow.model'
import { Interaction } from './interaction.model'

@Table({
  tableName: 'creator',
})
export class Creator extends Model<CreatorAttributes, CreatorCreationAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
  })
    id: number

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    name: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    email: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    password: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    photo: string

  @HasMany(() => Video, 'creator_id')
    videos: Video[]

  @HasMany(() => Interaction, 'creator_id')
    interactions: Interaction[]

  @HasMany(() => Follow, 'followed_creator_id')
    followed: Follow[]

  @HasMany(() => Follow, 'follower_creator_id')
    followers: Follow[]
}
