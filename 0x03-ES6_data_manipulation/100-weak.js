export const weakMap = WeakMap();
const MAX = 5;
export default function queryAPI(endpoint) {
  // eslint-disable-next-line
  !(weakMap.has(endpoint)) ? weakMap.set(endpoint, 0) : weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX) {
    throw new Error('Endpoint load is high');
  }
}
