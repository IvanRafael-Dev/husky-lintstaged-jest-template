import { sayHello } from './arquivo'

describe('#sayHello', () => {
  describe('quando for passado o parametro "Trybe"', () => {
    it('deve retornar "Hello Trybe!"', () => {
      const result = sayHello('Trybe')
      expect(result).toBe('Hello Trybe!!!')
    })
  })
})
