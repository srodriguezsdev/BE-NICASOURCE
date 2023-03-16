import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { FollowAttributes, FollowCreationAttributes } from '../interfaces/creator'
import { Creator } from './creator.model'

@Table({
  tableName: 'follow',
})
export class Follow extends Model<FollowAttributes, FollowCreationAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
  })
    id: number

  @ForeignKey(() => Creator)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    follower_creator_id: string

  @BelongsTo(() => Creator, 'follower_creator_id')
    follower: Creator

  @ForeignKey(() => Creator)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    followed_creator_id: string

  @BelongsTo(() => Creator, 'followed_creator_id')
    followed: Creator
}
