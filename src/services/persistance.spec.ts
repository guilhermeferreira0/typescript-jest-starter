// describe('Testando alguma coisa', () => {
//   it('should return one', () => {
//     const number = 1;
//     expect(number).toBe(1);
//   });
// });

// describe('Testando alguma coisa 02', () => {
//   test('should return Julia', () => {
//     const nome = 'Julia';
//     expect(nome).toBe('Julia');
//   });
// });

import { Persistancy } from './persistance';

describe('Persistancy', () => {
  afterEach(() => jest.clearAllMocks());
  // Limpa os mocks após o teste, no caso vai limpar a instancia da classe;

  it('should return undefined', () => {
    // System under test
    const sut = new Persistancy();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.lo once', () => {
    const sut = new Persistancy();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.lo once', () => {
    const sut = new Persistancy();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.lo with "Pedido salvo..."', () => {
    const sut = new Persistancy();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
