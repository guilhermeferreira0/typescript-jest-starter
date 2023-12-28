import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Products', () => {
  it('should have properties names and price', () => {
    const sut = createSut('Camiseta', 50);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 50);
    expect(sut.price).toBeCloseTo(50);
  });
});
