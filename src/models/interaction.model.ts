import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { InteractionAttributes, InteractionCreationAttributes } from '../interfaces/video'
import { Creator } from './creator.model'
import { Video } from './video.model'

@Table({
  tableName: 'interaction',
})
export class Interaction extends Model<InteractionAttributes, InteractionCreationAttributes> {
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
    creator_id: string

  @BelongsTo(() => Creator, 'creator_id')
    creator: Creator

  @ForeignKey(() => Video)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    video_id: string

  @BelongsTo(() => Video, 'video_id')
    video: Video
}
