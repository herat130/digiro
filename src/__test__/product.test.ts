import { sortProduct } from '../index';
import { IProduct } from '../types/product';

let productObj: IProduct[] = [];
describe('sort product test cases', () => {

  beforeEach(() => {
    productObj = [
      { id: 0, price: 10 },
      { id: 1, price: 20 },
      { id: 2, price: 30 },
      { id: 3, price: 40 },
      { id: 4, price: 50 },
      { id: 5, price: 60 },
      { id: 6, price: 70 },
      { id: 7, price: 80 },
      { id: 8, price: 90 },
      { id: 9, price: 100 },
    ]
  })

  it('size should be less than product length', () => {
    expect(sortProduct(productObj, { size: 11 })()).toEqual({ highest: null, lowest: null });
  });

  it('in case size is 0 return null', () => {
    // immutable array needs to be pass for each call
    expect(sortProduct([...productObj], { size: 0 })()).toEqual({ highest: null, lowest: null });
  });

  it('highest lenght should be same as size', () => {
    // immutable array needs to be pass for each call
    // expect(sortProduct(productObj, { size: 5 })().highest).toBe(5);
  });

});