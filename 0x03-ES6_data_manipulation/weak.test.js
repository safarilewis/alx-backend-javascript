import { queryAPI, weakMap } from "./100-weak.js";

test("queryAPI is implemented correctly", () => {
  const endpoint = { protocol: 'http', name: 'getUsers' };
  const endpoint2 = { protocol: 'http', name: 'getUsers' };
  expect(weakMap.has(endpoint)).toBe(false);
  expect(weakMap.has(endpoint2)).toBe(false);
  queryAPI(endpoint);
  expect(weakMap.has(endpoint)).toBe(true);
  expect(weakMap.get(endpoint)).toBe(1);
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toBe(2);
  queryAPI(endpoint);
  expect(weakMap.get(endpoint)).toBe(3);
});