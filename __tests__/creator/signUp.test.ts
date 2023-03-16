import request from 'supertest'

const app = 'http://localhost:8000' 

describe('POST /signup', () => {

  it('should signup creator', async () => {
    const response = await request(app).post('/creator/signup').send({
      name: 'testuser',
      password: 'testpassword',
      email: 'test@email.com',
      photo: 'url',
    })

    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('creator_id')
    expect(response.body).toHaveProperty('token')
  })
})
