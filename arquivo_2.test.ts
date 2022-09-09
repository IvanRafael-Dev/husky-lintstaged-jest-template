import { sayGoodbye } from './arquivo_2'

describe('#sayGoodbye', () => {
  describe('quando for passado o parametro "Ivan"', () => {
    it('deve retornar "Hello Trybe!"', () => {
      const result = sayGoodbye('Ivan')
      expect(result).toBe('Goodbye Ivan!!!')
    })
  })
})
