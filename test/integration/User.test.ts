// User: email, username, password
import supertest from 'supertest'
import app from '../../src/app'

describe('UserController', () => {
  describe('#add', () => {
    describe('quando o campo email não é informado', () => {
      it('deve retornar um status 400.', async () => {
        const response = await supertest(app)
          .post('/user')
          .send({ username: 'any_username', password: 'any_password' })
        expect(response.status).toEqual(400)
      })
    })

    describe('quando o campo password não é informado', () => {
      it('deve retornar um status 400.', async () => {
        const response = await supertest(app)
          .post('/user')
          .send({ username: 'any_username', email: 'any_email@mail.com' })
        expect(response.status).toEqual(400)
      })
    })

    describe('quando o campo username não é informado', () => {
      it('deve retornar um status 400.', async () => {
        const response = await supertest(app)
          .post('/user')
          .send({ password: 'any_password', email: 'any_email@mail.com' })
        expect(response.status).toEqual(400)
      })
    })
  })
})
