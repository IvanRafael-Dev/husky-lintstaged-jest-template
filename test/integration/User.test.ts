// User: email, username, password
import supertest from 'supertest'
import app from '../../src/app'

describe('UserController', () => {
  describe('#add', () => {
    describe('quando o email não é informado', () => {
      it('deve retornar um status 400', async () => {
        const response = await supertest(app)
          .post('/user')
          .send({ username: 'any_username', password: 'any_password' })
        expect(response.status).toEqual(400)
      })
    })
  })
})
