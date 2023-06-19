export const weakMap = new WeakMap();
const MAX = 5;
export function queryAPI(endpoint) {
  // eslint-disable-next-line
  !weakMap.has(endpoint) ? weakMap.set(endpoint, 0) : null;
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX) {
    throw new Error('Endpoint load is high');
  }
}
