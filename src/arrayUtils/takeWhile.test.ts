import { takeWhile } from './takeWhile';

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

describe(`takeWhile`, () => {
  describe(`given an array of ascending integers`, () => {
    describe(`and predicate n < 10`, () => {
      it(`will return only the first 9 elts`, () => {
        const isLessThan10 = (n: number) => n < 10;
        expect(takeWhile(isLessThan10)(testArray)).toMatchObject([
          1, 2, 3, 4, 5, 6, 7, 8, 9
        ]);
      });
    });
    describe(`and predicate n > 10`, () => {
      it(`will return an empty list`, () => {
        const isGreaterThan10 = (n: number) => n > 10;
        expect(takeWhile(isGreaterThan10)(testArray)).toMatchObject([]);
      });
    });
  });
});
