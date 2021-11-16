import { getTailIndex } from './getTailIndex';

describe(`getTailIndex`, () => {
  describe(`given an array of length X where X > 0`, () => {
    it(`will return the index of the last element`, () => {
      expect(getTailIndex([1])).toEqual(0);
      expect(getTailIndex([1, 2])).toEqual(1);
      expect(getTailIndex([1, 2, 3])).toEqual(2);
    });
  });
  describe(`given an array of length 0`, () => {
    it(`will return -1`, () => {
      expect(getTailIndex([])).toEqual(-1);
    });
  });
});
