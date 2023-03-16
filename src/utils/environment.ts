import dotenv from 'dotenv'

dotenv.config()

export const env = {
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  port: process.env.PORT,
  db: {
    name: process.env.DATABASE_NAME as string,
    host: process.env.DATABASE_HOST as string,
    user: process.env.DATABASE_USER as string,
    password: process.env.DATABASE_PASSWORD as string,
    port: process.env.DATABASE_PORT as string,
  },
}
