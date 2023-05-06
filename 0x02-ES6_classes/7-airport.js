export default class Airport {
  constructor(name, code) {
    this.__name = name;
    this.__code = code;
  }

  get [Symbol.toStringTag]() {
    return this.__code;
  }
}
