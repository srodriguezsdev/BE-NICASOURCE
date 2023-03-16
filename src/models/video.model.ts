import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { VideoAttributes, VideoCreationAttributes } from '../interfaces/video'
import { Creator } from './creator.model'

@Table({
  tableName: 'video',
})
export class Video extends Model<VideoAttributes, VideoCreationAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
  })
    id: number

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
    title: number

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
    published: string

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    url: string

  @ForeignKey(() => Creator)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
    creator_id: string

  @BelongsTo(() => Creator, 'creator_id')
    creator: Creator
}
