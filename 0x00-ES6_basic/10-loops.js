export default function appendToEachArrayValue(array, appendString) {
  let array2 = [];
  for (let idx of array) {
    array2.push(appendString + idx);
  }

  return array2;
}
