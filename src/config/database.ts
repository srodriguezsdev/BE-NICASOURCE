import { Sequelize } from 'sequelize-typescript'
import { Creator, Video, Follow, Interaction } from '../models'
import { env } from '../utils/environment'

export const sequelize = new Sequelize(env.db.name, env.db.user, env.db.password, {
  host: env.db.host,
  dialect: 'postgres',
  models: [__dirname + './models'],
  define: {
    timestamps: false,
  },
})

sequelize.addModels([Creator, Video, Interaction, Follow])
