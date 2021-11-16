type HeadOverload = {
  <T0, TRest>(arr: [T0, ...Array<TRest>]): T0;
  <T>(arr: Array<T>): T;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const head: HeadOverload = (arr: any) => {
  if (arr.length < 1) throw new Error(`Null pointer exception`);
  return arr[0];
};
