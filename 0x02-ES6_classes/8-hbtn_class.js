export default class HolbertonClass {
  constructor(size, location) {
    this.__size = size;
    this.__location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.__size;
    }
    if (hint === 'string') {
      return this.__location;
    }
    return this;
  }
}
