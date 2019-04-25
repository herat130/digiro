import { IProduct, IReturnObj, IOption } from './types/product';
let xProductObj: IProduct[];
export const sortProduct = (ProductObj: IProduct[], option: IOption): any => {
  if (JSON.stringify(xProductObj) == JSON.stringify(ProductObj)) {
    return () => {
      return { highest: null, lowest: null }
    };
  }
  return () => {
    xProductObj = [...ProductObj];
    const size: number = option.size ? option.size : 5;
    if (size === 0 || isNaN(size) || (ProductObj || []).length < size) {
      return { highest: null, lowest: null };
    }
    const sortedProductArr = [...ProductObj].sort((a, b) => b.price - a.price)
    const highestArr = sortedProductArr.slice(0, size);
    const lowestArr = sortedProductArr.slice(size, sortedProductArr.length);
    return { highest: highestArr, lowest: lowestArr.length > 0 ? lowestArr : null };
  }
}

const productObj: IProduct[] = [
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
];


const result: IReturnObj = sortProduct(productObj, { size: 1 })();
console.log(result);
console.log("----------");
const result2: IReturnObj = sortProduct(productObj, { size: 1 })();
console.log(result2);
console.log("----------");
productObj[1] = { id: 3, price: 40 };
const result3: IReturnObj = sortProduct(productObj, { size: 1 })();
console.log(result3);
const result4: IReturnObj = sortProduct(productObj, { size: 1 })();
console.log(result4);
productObj.push({id:10,price:50});
const result5: IReturnObj = sortProduct(productObj, { size: 1 })();
console.log(result5);