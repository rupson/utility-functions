export const takeWhile =
  <T>(predicate: (elt: T) => boolean) =>
  (arr: Array<T>): Array<T> => {
    if (predicate(arr[0])) {
      return [arr[0]].concat(takeWhile(predicate)(arr.slice(1)));
    }
    return [];
  };
