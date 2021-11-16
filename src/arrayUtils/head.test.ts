import { head } from './head';

describe(`head`, () => {
  describe(`given an array of length X, where X > 0`, () => {
    const testArray = [1, 2, 3, 4];
    it(`will return the first element`, () => {
      expect(head(testArray)).toEqual(1);
    });
  });
  describe(`given an array of length 0`, () => {
    const testArray: [] = [];
    it(`will return the first element`, () => {
      expect(() => head(testArray)).toThrow();
    });
  });
});
