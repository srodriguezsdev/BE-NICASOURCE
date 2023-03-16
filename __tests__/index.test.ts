import request from 'supertest'

const app = 'http://localhost:8000'

describe('Test app.ts', () => {
  test('Catch-all route', async () => {
    const res = await request(app).get('/')
    expect(res.body).toEqual('Nicasource BE server')
  })
})
